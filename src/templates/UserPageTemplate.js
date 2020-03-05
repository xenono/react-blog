import React from 'react';
import Navigation from 'components/molecules/Navigation/Navigation';

const UserPageTemplate = ({ children }) => (
  <>
    <Navigation />
    {children}
  </>
);

export default UserPageTemplate;
