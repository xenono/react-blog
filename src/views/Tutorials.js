import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import ItemsList from 'components/organisms/ItemsList/ItemsList';

const Tutorials = () => (
  <UserPageTemplate primary>
    <ItemsList itemType="tutorials" />
  </UserPageTemplate>
);

export default Tutorials;
