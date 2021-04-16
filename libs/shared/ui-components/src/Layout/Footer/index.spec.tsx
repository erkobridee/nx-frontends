import React from 'react';
import { render } from '@testing-library/react';

import LayoutFooter from './index';

describe('LayoutFooter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LayoutFooter />);
    expect(baseElement).toBeTruthy();
  });
});
