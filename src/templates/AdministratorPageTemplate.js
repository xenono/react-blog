import React from 'react';
import { Redirect } from 'react-router-dom';
import Footer from 'components/molecules/Footer/Footer';
import Header from 'components/organisms/Header/Header';
import { connect } from 'react-redux';

const AdministratorPageTemplate = ({ children, isLogged }) => {
  // if (!isLogged) {
  //   alert('Access Denied');
  //   return <Redirect to="/" />;
  // }
  return (
    <>
      <Header primary administratorNav="true" />
      {children}
      <Footer positionStatic />
    </>
  );
};

const mapStateToProps = ({ isLogged }) => ({ isLogged });

export default connect(mapStateToProps)(AdministratorPageTemplate);
