import React from 'react';
import PropTypes from 'prop-types';
import Navigation from 'components/molecules/Navigation/Navigation';

const UserPageTemplate = ({ children, primary }) => (
  <>
    <Navigation primary={primary} />
    {children}
  </>
);

UserPageTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default UserPageTemplate;
