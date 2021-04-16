import React from 'react';
import { render } from '@testing-library/react';

import Layout from './index';

describe(' Layout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Layout headerGreetings="hello world" />);
    expect(baseElement).toBeTruthy();
  });
});
