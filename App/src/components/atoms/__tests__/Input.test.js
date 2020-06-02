import React from 'react';
import { render } from '@testing-library/react';
import Input from 'components/atoms/Input/Input';

describe('Input component', () => {
  it('renders properly', () => {
    const { getByPlaceholderText } = render(<Input placeholder="Nickname" />);

    expect(getByPlaceholderText('Nickname')).toBeInTheDocument();
  });
});
