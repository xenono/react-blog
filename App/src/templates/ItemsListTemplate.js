import React from 'react';
import GridTemplate from './GridTemplate';
import Post from 'components/molecules/Post/Post';

const ItemsListTemplate = ({ itemsArray, itemType }) => (
  <GridTemplate>
    {itemsArray.map(({ _id: id, title, content, imageUrl, videoUrl }) => (
      <Post
        id={id}
        title={title}
        content={content}
        imageUrl={imageUrl}
        videoUrl={videoUrl}
        key={id}
        pageType={itemType}
      />
    ))}
  </GridTemplate>
);

export default ItemsListTemplate;
