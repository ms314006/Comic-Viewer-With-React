import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { toBeInTheDocument } from 'jest-dom';
import Chapter from '../../component/Chapters/Chapter';

expect.extend({ toBeInTheDocument, });

describe('<Chapter />', () => {
  afterEach(() => {
    cleanup();
  });

  test('測試有沒有正常 render', () => {
    const { getByTestId, } = render(<Chapter />);

    expect(getByTestId('chapter_block')).toBeInTheDocument();
  });

  test('測試路由會不會正常換頁', () => {
    const route = '/';
    const history = createMemoryHistory({ initialEntries: [route], });

    const { getByTestId, } = render(
      <Router history={history}>
        <Chapter />
      </Router>
    );
    expect(history.location.pathname).toBe('/');
    const chapter = getByTestId('chapter_link');
    fireEvent.click(chapter);
    expect(history.location.pathname).toBe(`${chapter.href}`);
  });
});
