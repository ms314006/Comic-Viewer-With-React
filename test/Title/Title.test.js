import React from 'react';
import { render, cleanup } from 'react-testing-library';
import { toBeInTheDocument } from 'jest-dom';
import Title from '../../component/Title';

expect.extend({ toBeInTheDocument, });

describe('<Title />', () => {
  afterEach(() => {
    cleanup();
  });

  test('測試有沒有正常 render', () => {
    const { getByTestId, } = render(<Title />);

    expect(getByTestId('title_block')).toBeInTheDocument();
  });
});
