import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { toBeInTheDocument } from 'jest-dom';
import ComicName from '../../../src/component/ComicInfo/ComicName';

expect.extend({ toBeInTheDocument, });

describe('<ComicName />', () => {
  afterEach(() => {
    cleanup();
  });

  test('測試有沒有正常 render', () => {
    const { getByTestId, } = render(<ComicName />);

    expect(getByTestId('comicName_block')).toBeInTheDocument();
  });
});
