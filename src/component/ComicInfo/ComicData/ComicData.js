import React from 'react';
import styles from './index.scss';

const ComicData = () => {
  const getStarRate = (rate) => {
    let counter = 0;
    const result = ['1', '2', '3', '4', '5'].map((item) => {
      if (counter === rate) {
        return (
          <i
            key={item}
            className={`far fa-star ${styles.icon_gap}`}
          />
        );
      }
      counter += 1;
      return (
        <i
          key={item}
          className={`fas fa-star ${styles.icon_gap}`}
        />
      );
    });
    return result;
  };

  return (
    <div
      className={styles.comicData_block}
      data-testid="comicData_block"
    >
      <div className={styles.infoRow}>
        <div className={styles.infoName}>
          Genres
        </div>
        <div className={styles.infoContent}>
          Fusce/vehicula/dolor
        </div>
      </div>
      <div className={styles.infoRow}>
        <div className={styles.infoName}>
          Author
        </div>
        <div className={styles.infoContent}>
          Namae Shiranai
        </div>
      </div>
      <div className={styles.infoRow}>
        <div className={styles.infoName}>
          Status
        </div>
        <div className={styles.infoContent}>
          Ongoing
        </div>
      </div>
      <div className={styles.infoRow}>
        <div className={styles.infoName}>
          Rate
        </div>
        <div className={styles.infoContent}>
          {getStarRate(4)}
        </div>
      </div>
      <div className={styles.summaryRow}>
        <div className={styles.summaryName}>
          Summary
        </div>
        <div className={styles.summaryContent}>
          {'If your banker breaks, you snap; if your apothecary by mistake sends you poison in your pills, you die. '}
        </div>
        <div className={styles.summaryContent}>
          {'Therefore, I say, I saw that this situation of mine was the precise situation of every mortal that has this Siamese connexion with a plurality of other mortals. '}
        </div>
      </div>
    </div>
  );
};

export default ComicData;
