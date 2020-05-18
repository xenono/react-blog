import React from 'react';
import Img from 'react-image';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import LoadingIcon from 'components/atoms/LoadingIcon/LoadingIcon';

const StyledImage = styled.img`
  object-fit: cover;
  max-width: 100%;
  border: 4px solid ${({ theme }) => theme.primary};

  ${({ circle, postminiature, postDetails }) =>
    (circle &&
      css`
        border-radius: 50%;
        width: 400px;
      `) ||
    (postminiature &&
      css`
        width: 100%;
        height: 400px;
        border: none;
        border-bottom: 4px solid ${({ theme }) => theme.primary};
      `) ||
    (postDetails &&
      css`
        max-width: 50%;
      `)}
`;

const Image = ({ circle, src, postminiature, postDetails }) => {
  return (
    <StyledImage
      as={Img}
      circle={circle}
      postminiature={postminiature}
      details={postDetails}
      src={src}
      loader={<LoadingIcon />}
    />
  );
};

Image.propTypes = {
  postminiature: PropTypes.bool.isRequired,
  circle: PropTypes.bool,
  postDetails: PropTypes.bool,
  src: PropTypes.string.isRequired,
};
Image.defaultProps = {
  postDetails: false,
  circle: false,
};

export default Image;
