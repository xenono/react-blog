import React from 'react';
import { render } from '@testing-library/react';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

describe('Paragraph component', () => {
  it('renders properly', () => {
    const { getByText } = render(<Paragraph>A lot of text</Paragraph>);
    expect(getByText('A lot of text')).toBeInTheDocument();
  });
  it('has correct color according to prop', () => {
    const { getByText, rerender } = render(<Paragraph black>A lot of text</Paragraph>);
    expect(getByText('A lot of text')).toHaveStyle(`color:black;`);
    rerender(<Paragraph white>A lot of text</Paragraph>);
    expect(getByText('A lot of text')).toHaveStyle(`color:white;`);
  });
});
