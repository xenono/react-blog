import React from 'react';
import { render } from '@testing-library/react';
import Radio from 'components/atoms/Radio/Radio';

describe('Radio Component', () => {
  it('renders properly', () => {
    const { getByLabelText } = render(
      <Radio changeFn={() => console.log('clicked')}>Tutorials</Radio>,
    );
    expect(getByLabelText('Tutorials')).toBeInTheDocument();
  });
});
