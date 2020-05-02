import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

const withAuth = Component => {
  return (WithAuth = props => {
    if (props.isLogged) {
      return <Redirect to="/administrator" />;
    }
  });
};

export default withAuth;
