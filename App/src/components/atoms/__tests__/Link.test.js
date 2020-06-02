import React from 'react';
import { render } from '@testing-library/react';
import Link from 'components/atoms/Link/Link';

describe('Link component', () => {
  it('renders properly', () => {
    const { getByText } = render(<Link href="/">Homepage</Link>);

    expect(getByText('Homepage')).toBeInTheDocument();
  });
  it('redirects to correct link', () => {
    const { container } = render(<Link href="/tutorials">Homepage</Link>);

    expect(container.innerHTML).toEqual(expect.stringContaining('/tutorials'));
  });
});
