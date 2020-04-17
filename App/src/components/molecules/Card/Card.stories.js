import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './Card';
import lionImage from 'assets/lion.jpg';
import AuthorImage from 'assets/image-2.jpeg';

storiesOf('Card', module).add('Normal', () => (
  <Card
    image={lionImage}
    title="Fight like a lion"
    content="Life is just a game, but with no saves."
  />
));
