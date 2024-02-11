import { render } from '@testing-library/react';
import React from 'react';

import Template from '..';

describe('Template', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(
      <div data-testid="demo">
        <Template>default</Template>
        <Template type="primary">primary</Template>
        <Template type="info">info</Template>
        <Template type="warning">warning</Template>
        <Template type="danger">danger</Template>
      </div>,
    );
    expect(getByTestId('id')).toMatchSnapshot();
  });
});
