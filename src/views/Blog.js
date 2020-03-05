import React from 'react';
import Navigation from 'components/molecules/Navigation/Navigation';
import Post from 'components/molecules/Post/Post';
import GridTemplate from 'templates/GridTemplate';
import AuthorImage from 'assets/image-2.jpeg';
import Image from 'components/atoms/Image/Image';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const Blog = () => (
  <>
    <Navigation primary />
    <GridTemplate>
      <Image src={AuthorImage} />
      <Paragraph>
        My lovely life cut in small posts. You will read everything about me, my private experience,
        funny or dangerous situations and a lot of tech stuff.{' '}
      </Paragraph>
    </GridTemplate>
    <GridTemplate>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </GridTemplate>
  </>
);
export default Blog;
