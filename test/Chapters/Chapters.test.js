import React from 'react';
import { HashRouter } from 'react-router-dom';
import { render, cleanup } from 'react-testing-library';
import { toBeInTheDocument } from 'jest-dom';
import Chapters from '../../src/component/Chapters';

expect.extend({ toBeInTheDocument, });

describe('<Chapters />', () => {
  afterEach(() => {
    cleanup();
  });

  test('測試有沒有正常 render', () => {
    const { getByTestId, } = render(
      <HashRouter>
        <Chapters />
      </HashRouter>
    );

    expect(getByTestId('chapters_block')).toBeInTheDocument();
  });
});
