import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import LoginPage from 'views/LoginPage';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';
import { authenticateUser } from 'actions';

const StyledWrapper = styled.div`
  min-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledFieldContainer = styled.div`
  width: 100%;
  position: relative;
`;
const StyledForm = styled(Form)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledFormik = styled(Formik)`
  width: 100%;
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 1em;
`;
const StyledErrorMessage = styled(ErrorMessage)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.3rem;
  font-weight: bold;
  bottom: 25px;
  padding: 0.3em 0.7em;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.secondary};
`;
const StyledField = styled(Field)`
  font-size: 2rem;
  text-align: center;
  color: black;
  width: 100%;
  background: none;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.primary};
  outline: none;
  margin-bottom: 3em;
`;

class LoginForm extends Component {
  render() {
    return (
      <StyledWrapper>
        <StyledHeading>Login</StyledHeading>
        <StyledFormik
          initialValues={{ username: '', password: '' }}
          validate={values => {
            const errors = {};

            if (!values.username) {
              errors.username = 'Username is required';
            } else if (!values.password) {
              errors.password = 'Password is required';
            }

            return errors;
            // if (!values.email) {
            //   errors.email = 'Required';
            // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            //   errors.email = 'Invalid email address';
            // }
            // return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            this.props.authenticate(values.username, values.password);
            const { isLogged } = this.props;
            console.log(isLogged, 'endofsubmit');
          }}
        >
          {({ values, isSubmitting }) => {
            const { isLogged } = this.props;
            if (isLogged) {
              return <Redirect to="/administrator" />;
            }
            return (
              <StyledForm>
                <StyledFieldContainer>
                  <StyledField type="text" name="username" />
                  <StyledErrorMessage name="username" component="div" />
                </StyledFieldContainer>
                <StyledFieldContainer>
                  <StyledField type="password" name="password" />
                  <StyledErrorMessage name="password" component="div" />
                </StyledFieldContainer>
                <Button type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
              </StyledForm>
            );
          }}
        </StyledFormik>
      </StyledWrapper>
    );
  }
}

const mapStateToProps = ({ isLogged }) => ({ isLogged });

const mapDispatchToProps = dispatch => ({
  authenticate: (username, password) => dispatch(authenticateUser(username, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
