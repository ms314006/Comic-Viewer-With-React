import React from 'react';
import { HashRouter, Router } from 'react-router-dom';
import { render, cleanup, fireEvent } from 'react-testing-library';
import { createMemoryHistory } from 'history';
import { toBeInTheDocument } from 'jest-dom';
import Header from '../../src/component/ComicContent/Header';

expect.extend({ toBeInTheDocument, });

describe('<Header />', () => {
  afterEach(() => {
    cleanup();
  });

  test('測試有沒有正常 render', () => {
    const { getByTestId, } = render(
      <HashRouter>
        <Header />
      </HashRouter>
    );

    expect(getByTestId('header_block')).toBeInTheDocument();
  });

  test('測試回首頁按鈕是否能正常回首頁', () => {
    const route = '/chapter/1';
    const history = createMemoryHistory({ initialEntries: [route], });

    const { getByTestId, } = render(
      <Router history={history}>
        <Header />
      </Router>
    );
    expect(history.location.pathname).toBe(route);
    const home = getByTestId('home_link');
    fireEvent.click(home);
    expect(history.location.pathname).toBe('/');
  });

  test('測試更換章節是否能夠正常改變 router ', () => {
    const route = '/chapter/1/1';
    const history = createMemoryHistory({ initialEntries: [route], });

    const { getByTestId, } = render(
      <Router history={history}>
        <Header />
      </Router>
    );

    expect(history.location.pathname).toBe(route);
    const chapter = getByTestId('select_chapter');
    fireEvent.change(chapter, { target: { value: '2', }, });
    expect(history.location.pathname).toBe('/chapter/2/1');
  });

  test('測試更換頁數是否能夠正常改變 router ', () => {
    const route = '/chapter/1/1';
    const history = createMemoryHistory({ initialEntries: [route], });

    const { getByTestId, } = render(
      <Router history={history}>
        <Header />
      </Router>
    );

    expect(history.location.pathname).toBe(route);
    const chapter = getByTestId('select_page');
    fireEvent.change(chapter, { target: { value: '2', }, });
    expect(history.location.pathname).toBe('/chapter/1/2');
  });

  test('測試更換主題是否會改變 class ', () => {
    const route = '/chapter/1/1';
    const history = createMemoryHistory({ initialEntries: [route], });

    const { getByTestId, } = render(
      <Router history={history}>
        <Header />
      </Router>
    );

    expect(getByTestId('header_block')).toHaveClass('default_theme');
    const theme = getByTestId('theme');
    fireEvent.click(theme);
    expect(getByTestId('header_block')).toHaveClass('black_theme');
  });
});
