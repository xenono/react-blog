import React from 'react';
import Hero from 'components/organisms/Hero/Hero';
import PostTable from 'components/organisms/PostTable/PostTable';
import Card from 'components/molecules/Card/Card';
import UserPageTemplate from 'templates/UserPageTemplate';
import lionImage from 'assets/lion.jpg';

const Homepage = () => (
  <>
    <Hero />
    <Card
      image={lionImage}
      title="Fight like a lion"
      content="Life is just a game, but with no saves."
    />
    <PostTable />
  </>
);
export default Homepage;
