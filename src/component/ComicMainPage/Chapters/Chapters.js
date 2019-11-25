import React from 'react';
import Chapter from './Chapter';
import styles from './index.scss';

const falseData = [
  {
    id: '1',
    title: 'The F2E Challenge Start!',
    newest: false,
  }, {
    id: '2',
    title: 'Todo List is Going Crazy!',
    newest: true,
  }
];

const Chapters = () => (
  <div
    className={styles.chapters_block}
    data-testid="chapters_block"
  >
    <div className={styles.chapters_text_block}>
      <span className={styles.chapters_text}>
        All Chapters
      </span>
    </div>
    <div className={styles.chapters_list}>
      {
        falseData.map(item => (
          <Chapter key={item.id} content={item} />
        ))
      }
    </div>
  </div>
);

export default Chapters;
