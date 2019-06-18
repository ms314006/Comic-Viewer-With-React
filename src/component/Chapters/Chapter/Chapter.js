import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './index.scss';

const Chapter = (props) => {
  const { content, } = props;
  const isNew = () => {
    if (content.newest) {
      return (
        <span
          className={styles.new_mark}
          data-testid="new_mark"
        >
          NEW
        </span>
      );
    }
    return null;
  };

  return (
    <div
      className={styles.chapter_block}
      data-testid="chapter_block"
    >
      <Link
        to={`/chapter/${content.id}/1`}
        data-testid="chapter_link"
      >
        {`Chapter ${content.id}: ${content.title}`}
      </Link>
      {isNew()}
    </div>
  );
};

Chapter.propTypes = {
  content: PropTypes.shape({}),
};

Chapter.defaultProps = {
  content: {},
};

export default Chapter;
