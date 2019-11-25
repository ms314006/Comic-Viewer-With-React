import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Title from '../Title';
import ComicMainPage from '../ComicMainPage';
import ComicContent from '../ComicContent';

const Main = () => (
  <div data-testid="main_block">
    <Title />
    <HashRouter>
      <Switch>
        <Route exact path="/" component={() => <ComicMainPage />} />
        <Route path="/chapter" component={() => <ComicContent />} />
      </Switch>
    </HashRouter>
  </div>
);

export default Main;
