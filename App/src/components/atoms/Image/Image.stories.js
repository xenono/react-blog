import React from 'react';
import { storiesOf } from '@storybook/react';
import lionImg from 'assets/lion.jpg';
import laptopImg from 'assets/comp2.jpg';
import Image from './Image';

storiesOf('Image', module)
  .add('Primary', () => <Image src={laptopImg} />)
  .add('Circled', () => <Image src={lionImg} circle />);
