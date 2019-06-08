import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Title from '../Title';
import ComicInfo from '../ComicInfo';
import Chapters from '../Chapters';
import styles from './index.scss';

const Main = () => (
  <div data-testid="main_block">
    <Title />
    <HashRouter>
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <div
              className={styles.comicMainPage}
              data-testid="comicPage_block"
            >
              <ComicInfo />
              <Chapters />
            </div>
          )}
        />
        <Route
          path="/chapter"
          component={() => (
            <div data-testid="comicContent_block" />
          )}
        />
      </Switch>
    </HashRouter>
  </div>
);

export default Main;
