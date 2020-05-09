import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
  it('renders properly', () => {
    const { getByText } = render(<Button>Click</Button>);

    expect(getByText('Click')).toBeInTheDocument();
  });
});
