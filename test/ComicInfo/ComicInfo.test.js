import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { toBeInTheDocument } from 'jest-dom';
import ComicInfo from '../../src/component/ComicInfo';

expect.extend({ toBeInTheDocument, });

describe('<ComicInfo />', () => {
  afterEach(() => {
    cleanup();
  });

  test('測試有沒有正常 render', () => {
    const { getByTestId, } = render(<ComicInfo />);

    expect(getByTestId('comicInfo_block')).toBeInTheDocument();
  });
});
