import React from 'react';
import { storiesOf } from '@storybook/react';
import Link from './Link';

storiesOf('Link', module)
  .add('Normal', () => <Link href="/">Link</Link>)
  .add('Active', () => (
    <Link active href="/">
      Link
    </Link>
  ));
