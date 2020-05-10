import React from 'react';
import { storiesOf } from '@storybook/react';
import UpdateItemModal from './UpdateItemModal';

storiesOf('Update Item Modal ', module).add('Primary', () => (
  <UpdateItemModal
    id="1234"
    itemType="posts"
    title="Writing beauiful JavaScript"
    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste enim nam modieos quibusdam maiores labore quisquam fugiat, ab earum? Neque eum architecto, ipsum deleniti corrupti magnam eaque iusto corporis."
    imageUrl="https://cdn.pixabay.com/photo/2016/02/19/11/19/computer-1209641_960_720.jpg"
    videoUrl=""
  />
));
