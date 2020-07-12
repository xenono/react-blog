import React from 'react';
import { render } from '@testing-library/react';
import AuthorImage from 'assets/image-2.jpeg';
import Image from 'components/atoms/Image/Image';

describe('Image component', () => {
  it('renders properly', () => {
    const test = query => {
      expect(query('altText')).toBeInTheDocument();
    };

    const { getByAltText } = render(
      <Image src={AuthorImage} alt="altText" onLoad={() => test(getByAltText)} />,
    );
  });
  it('display loading icon', () => {
    const test = query => {
      expect(query('altText')).toBeInTheDocument();
    };
    const { getByAltText } = render(
      <Image src={AuthorImage} alt="altText" onLoad={() => test(getByAltText)} />,
    );
  });
  it('have proper styles with prop', () => {
    const testCss = (query, css) => {
      expect(query('altText')).toHaveStyle(css);
    };

    const testProps = (prop, css) => {
      const { getByAltText } = render(
        <Image src={AuthorImage} alt="altText" prop onLoad={() => testCss(getByAltText, css)} />,
      );
    };

    testProps(
      'postminiature',
      `width: 100%;
        border: none;
        border-bottom: 4px solid ${({ theme }) => theme.primary};`,
    );

    testProps(
      'postdetails',
      `max-width: 50%;

        @media (max-width: 780px) {
          max-width: 100%;
        }`,
    );

    testProps(
      'circle',
      `border-radius: 50%;
        width: 400px;
      `,
    );
  });
});
