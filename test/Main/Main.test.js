import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import { createMemoryHistory } from 'history';
import { Router, HashRouter } from 'react-router-dom';
import { toBeInTheDocument } from 'jest-dom';
import Main from '../../src/component/Main';

expect.extend({ toBeInTheDocument, });

describe('<Main />', () => {
  afterEach(() => {
    cleanup();
  });

  test('測試有沒有正確 render', () => {
    const { getByTestId, queryByTestId, } = render(
      <HashRouter>
        <Main />
      </HashRouter>
    );

    expect(getByTestId('comicPage_block')).toBeInTheDocument();
    expect(queryByTestId('comicContent_block')).toBeNull();
  });

  test('測試路由改變，畫面會不會跟著變', () => {
    const route = '/';
    const history = createMemoryHistory({ initialEntries: [route], });

    const { getByTestId, getAllByTestId, queryByTestId, } = render(
      <Router history={history}>
        <Main />
      </Router>
    );
    expect(getByTestId('comicPage_block')).toBeInTheDocument();
    expect(queryByTestId('comicContent_block')).toBeNull();
    fireEvent.click(getAllByTestId('chapter_link')[0]);
    expect(queryByTestId('comicPage_block')).toBeNull();
    expect(getByTestId('comicContent_block')).toBeInTheDocument();
  });
});
