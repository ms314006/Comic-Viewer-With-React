import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { toBeInTheDocument } from 'jest-dom';
import ComicData from '../../../src/component/ComicInfo/ComicData';

expect.extend({ toBeInTheDocument, });

describe('<ComicData />', () => {
  afterEach(() => {
    cleanup();
  });

  test('測試有沒有正常 render', () => {
    const { getByTestId, } = render(<ComicData />);

    expect(getByTestId('comicData_block')).toBeInTheDocument();
  });
});
