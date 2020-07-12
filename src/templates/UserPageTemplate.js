import React from 'react';
import PropTypes from 'prop-types';
import Header from 'components/organisms/Header/Header';
import Footer from 'components/molecules/Footer/Footer';

const UserPageTemplate = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

UserPageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.object]),
};
UserPageTemplate.defaultProps = {
  children: [],
};
export default UserPageTemplate;
