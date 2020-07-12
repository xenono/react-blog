import React from 'react';
import { storiesOf } from '@storybook/react';
import Paragraph from './Paragraph';

storiesOf('Paragraph', module)
  .add('Blue', () => (
    <Paragraph>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem libero necessitatibus quas
      officia at atque blanditiis eius, aut dolore incidunt eligendi eos ab! Hic distinctio
      consectetur, ipsum ratione sapiente natus?
    </Paragraph>
  ))
  .add('Black', () => (
    <Paragraph black>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem libero necessitatibus quas
      officia at atque blanditiis eius, aut dolore incidunt eligendi eos ab! Hic distinctio
      consectetur, ipsum ratione sapiente natus?
    </Paragraph>
  ));
