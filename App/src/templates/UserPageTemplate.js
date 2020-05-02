import React from 'react';
import PropTypes from 'prop-types';
import Navigation from 'components/molecules/Navigation/Navigation';
import Footer from 'components/molecules/Footer/Footer';

const UserPageTemplate = ({ children }) => (
  <>
    <Navigation />
    {children}
    <Footer />
  </>
);

UserPageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object]).isRequired, // solution to PropTypes.object is forbidden
};
export default UserPageTemplate;
