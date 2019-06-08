import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { toBeInTheDocument } from 'jest-dom';
import Chapters from '../../component/Chapters';

expect.extend({ toBeInTheDocument, });

describe('<Chapters />', () => {
  afterEach(() => {
    cleanup();
  });

  test('測試有沒有正常 render', () => {
    const { getByTestId, } = render(<Chapters />);

    expect(getByTestId('chapters_block')).toBeInTheDocument();
  });
});
