import React from 'react';
import Navigation from 'components/molecules/Navigation/Navigation';

const UserPageTemplate = ({ children, primary }) => (
  <>
    <Navigation primary={primary} />
    {children}
  </>
);

export default UserPageTemplate;
