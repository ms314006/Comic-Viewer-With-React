import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { toBeInTheDocument } from 'jest-dom';
import ComicCover from '../../../../src/component/ComicMainPage/ComicInfo/ComicCover';

expect.extend({ toBeInTheDocument, });

describe('<ComicCover />', () => {
  afterEach(() => {
    cleanup();
  });

  test('測試有沒有正常 render', () => {
    const { getByTestId, } = render(<ComicCover />);

    expect(getByTestId('comicCover_block')).toBeInTheDocument();
  });
});
