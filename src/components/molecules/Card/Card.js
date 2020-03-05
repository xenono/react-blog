import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Image from 'components/atoms/Image/Image';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import lionImage from 'assets/lion.jpg';

const StyledWrapper = styled.div`
  max-width: 100%;
  min-height: 500px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: space-around;
  box-shadow: 0px 2px 6px #000;
`;
const StyledFlexWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  align-items: center;
  justify-content: space-around;
`;
const StyledColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Card = ({ image, title, content }) => (
  <StyledWrapper>
    <StyledFlexWrapper row>
      <StyledColumn>
        <Image src={image} circle />
      </StyledColumn>
      <StyledColumn>
        <StyledFlexWrapper>
          <Heading>{title}</Heading>
          <Paragraph>{content}</Paragraph>
        </StyledFlexWrapper>
      </StyledColumn>
    </StyledFlexWrapper>
  </StyledWrapper>
);
export default Card;

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
  content: PropTypes.string,
};
Card.defaultProps = {
  title: null,
  content: null,
};
