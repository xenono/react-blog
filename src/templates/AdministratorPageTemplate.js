import React from 'react';
import { Redirect } from 'react-router-dom';
import Footer from 'components/molecules/Footer/Footer';
import Navigation from 'components/molecules/Navigation/Navigation';
import { connect } from 'react-redux';
import styled from 'styled-components';

const AdministratorPageTemplate = ({ children, isLogged }) => {
  // Comment of for creating AdminPanel
  // if (!isLogged) {
  //   alert('Access Denied');
  //   return <Redirect to="/" />;
  // }
  return (
    <>
      <Navigation primary administratorNav />
      {children}
      <Footer positionStatic />
    </>
  );
};

const mapStateToProps = ({ isLogged }) => ({ isLogged });

export default connect(mapStateToProps)(AdministratorPageTemplate);
