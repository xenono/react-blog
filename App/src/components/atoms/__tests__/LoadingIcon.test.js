import React from 'react';
import { render } from '@testing-library/react';
import LoadingIcon from 'components/atoms/LoadingIcon/LoadingIcon';

describe('Loading icon component', () => {
  it('renders properly', () => {
    const { getByAltText } = render(<LoadingIcon />);

    expect(getByAltText('Loading Icon')).toBeInTheDocument();
  });
});
