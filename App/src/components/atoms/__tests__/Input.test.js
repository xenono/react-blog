import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from 'components/atoms/Input/Input';

describe('Input component', () => {
  it('renders properly', () => {
    const { getByPlaceholderText } = render(<Input placeholder="Nickname" />);

    expect(getByPlaceholderText('Nickname')).toBeInTheDocument();
  });
  it('displays proper value', () => {
    const { getByPlaceholderText } = render(<Input placeholder="username" />);

    const input = getByPlaceholderText('username');

    fireEvent.change(input, { target: { value: 'Adriano' } });
    expect(input).toHaveValue('Adriano');
  });
});
