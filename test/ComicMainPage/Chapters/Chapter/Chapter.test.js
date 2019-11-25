import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import { createMemoryHistory } from 'history';
import { HashRouter, Router } from 'react-router-dom';
import { toBeInTheDocument } from 'jest-dom';
import Chapter from '../../../../src/component/ComicMainPage/Chapters/Chapter';

expect.extend({ toBeInTheDocument, });

const item = {
  id: '1',
  title: 'The F2E Challenge Start!',
  newest: false,
};

describe('<Chapter />', () => {
  afterEach(() => {
    cleanup();
  });

  test('測試有沒有正常 render', () => {
    const { getByTestId, queryByTestId, } = render(
      <HashRouter>
        <Chapter key={item.id} content={item} />
      </HashRouter>
    );

    expect(getByTestId('chapter_block')).toBeInTheDocument();

    // 不是 new 就不會出現 new mark
    expect(queryByTestId('new_mark')).toBeNull();
  });

  test('測試路由會不會正常換頁', () => {
    const route = '/';
    const history = createMemoryHistory({ initialEntries: [route], });

    const { getByTestId, } = render(
      <Router history={history}>
        <Chapter key={item.id} content={item} />
      </Router>
    );
    expect(history.location.pathname).toBe('/');
    const chapter = getByTestId('chapter_link');
    fireEvent.click(chapter);
    expect(history.location.pathname).toBe(`/chapter/${item.id}/1`);
  });

  test('測試 new mark 有沒有正常 render', () => {
    item.newest = true;
    const { getByTestId, } = render(
      <HashRouter>
        <Chapter key={item.id} content={item} />
      </HashRouter>
    );

    expect(getByTestId('chapter_block')).toBeInTheDocument();
    expect(getByTestId('new_mark')).toBeInTheDocument();
  });
});
