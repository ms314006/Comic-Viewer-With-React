import React from 'react';
import styles from './index.scss';

const ComicCover = () => (
  <div
    className={styles.comicCover_block}
    data-testid="comicCover_block"
  >
    <div
      className={styles.comicCover_image}
      style={{ backgroundImage: 'url(./image/comicCover.png)', }}
    />
  </div>
);

export default ComicCover;
