import React from 'react';
import { render } from '@testing-library/react';
import Heading from './Heading';

describe('Heading component', () => {
  it('renders properly', () => {
    const { getByText } = render(<Heading>Heading</Heading>);

    expect(getByText('Heading')).toBeInTheDocument();
  });
  it('have proper color with prop', () => {
    const { getByText, rerender } = render(<Heading>Heading</Heading>);

    expect(getByText('Heading')).toHaveStyle(`color: ${({ theme }) => theme.primary}`);

    rerender(<Heading black>Heading</Heading>);

    expect(getByText('Heading')).toHaveStyle(`color: black`);

    rerender(<Heading secondary>Heading</Heading>);

    expect(getByText('Heading')).toHaveStyle(`color: white`);
  });
});
