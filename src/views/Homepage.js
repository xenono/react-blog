import React from 'react';
import Hero from 'components/organisms/Hero/Hero';
import PostTable from 'components/organisms/PostTable/PostTable';
import Card from 'components/molecules/Card/Card';
import lionImage from 'assets/lion.jpg';
import Footer from 'components/molecules/Footer/Footer';

const Homepage = () => (
  <>
    <Hero />
    <Card
      image={lionImage}
      title="Fight like a lion"
      content="Life is just a game, but with no saves."
    />
    <PostTable />
    <Footer />
  </>
);
export default Homepage;
