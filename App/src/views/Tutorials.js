import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import ItemsListTemplate from 'templates/ItemsListTemplate';

const Tutorials = () => (
  <UserPageTemplate primary>
    <ItemsListTemplate itemType="tutorials" />
  </UserPageTemplate>
);

export default Tutorials;
