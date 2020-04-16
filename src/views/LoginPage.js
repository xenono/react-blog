import React, { Component } from 'react';
import styled from 'styled-components';
import UserPageTemplate from 'templates/UserPageTemplate';
import LoginForm from 'components/molecules/LoginForm/LoginForm';

const StyledWrapper = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LoginPage = () => (
  <UserPageTemplate primary>
    <StyledWrapper>
      <LoginForm />
    </StyledWrapper>
  </UserPageTemplate>
);

export default LoginPage;