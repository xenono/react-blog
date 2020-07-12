import React from 'react';
import Img from 'react-image';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import LoadingIcon from 'components/atoms/LoadingIcon/LoadingIcon';

const StyledImage = styled.img`
  object-fit: cover;
  max-width: 100%;
  border: 4px solid ${({ theme }) => theme.primary};

  ${({ circle, postminiature, postdetails }) =>
    (circle &&
      css`
        border-radius: 50%;
        width: 400px;
      `) ||
    (postminiature &&
      css`
        width: 100%;
        border: none;
        border-bottom: 4px solid ${({ theme }) => theme.primary};
      `) ||
    (postdetails &&
      css`
        max-width: 50%;

        @media (max-width: 780px) {
          max-width: 100%;
        }
      `)}
`;

const Image = ({ circle, src, postminiature, postdetails, alt }) => (
  <StyledImage
    as={Img}
    circle={circle}
    postminiature={postminiature}
    postdetails={postdetails}
    src={src}
    loader={<LoadingIcon />}
    alt={alt}
  />
);

Image.propTypes = {
  postminiature: PropTypes.bool,
  circle: PropTypes.bool,
  postdetails: PropTypes.bool,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};
Image.defaultProps = {
  postminiature: false,
  postdetails: false,
  circle: false,
  alt: '',
};

export default Image;
