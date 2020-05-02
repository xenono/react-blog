import React from 'react';
import Img from 'react-image';
import styled, { css } from 'styled-components';
import LoadingIcon from 'components/atoms/LoadingIcon/LoadingIcon';

const StyledImage = styled.img`
  object-fit: cover;
  max-width: 100%;
  border: 4px solid ${({ theme }) => theme.primary};

  ${({ circle, postMiniature, postDetails }) =>
    (circle &&
      css`
        border-radius: 50%;
        width: 400px;
      `) ||
    (postMiniature &&
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

const Image = ({ circle, src, postMiniature, postDetails }) => (
  <StyledImage
    as={Img}
    circle={circle}
    postMiniature={postMiniature}
    postDetails={postDetails}
    src={src}
    loader={<LoadingIcon />}
  />
);

export default Image;
