import React from 'react';
import ComicInfo from './ComicInfo';
import Chapters from './Chapters';
import styles from './index.scss';

const ComicMainPage = () => (
  <div
    className={styles.comicMainPage}
    data-testid="comicPage_block"
  >
    <ComicInfo />
    <Chapters />
  </div>
);

export default ComicMainPage;
