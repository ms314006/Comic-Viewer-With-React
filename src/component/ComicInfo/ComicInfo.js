import React from 'react';
import ComicCover from './ComicCover';
import ComicName from './ComicName';
import ComicData from './ComicData';
import styles from './index.scss';

const ComicInfo = () => (
  <div
    className={styles.comicInfo_block}
    data-testid="comicInfo_block"
  >
    <ComicCover />
    <div className={styles.comicDescribe_block}>
      <ComicName />
      <ComicData />
    </div>
  </div>
);

export default ComicInfo;
