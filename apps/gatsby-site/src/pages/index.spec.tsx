import React from 'react';
import { render } from '@testing-library/react';
import * as Gatsby from 'gatsby';

import Index from './index';

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');
useStaticQuery.mockImplementation(() => ({
  placeholderImage: {
    childImageSharp: {
      fluid: {
        aspectRatio: 1,
        src: '',
        srcSet: '',
        sizes: '',
      },
    },
  },
}));

jest.spyOn(Gatsby, 'graphql').mockImplementation(jest.fn());

describe('Index', () => {
  it('should render successfully', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const props: any = {};
    const { getByText } = render(<Index {...props} />);
    expect(getByText('Welcome to gatsby-site!')).toBeTruthy();
  });
});
