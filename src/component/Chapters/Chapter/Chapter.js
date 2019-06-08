import React from 'react';
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
        to={`/chapter/${content.id}`}
        data-testid="chapter_link"
      >
        {`Chapter ${content.id}: ${content.title}`}
      </Link>
      {isNew()}
    </div>
  );
};

export default Chapter;
