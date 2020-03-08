import React from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';

const state = {
  id: 1,
  title: 'Writing beautiful JavaScript',
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste enim nam modieos quibusdam maiores labore quisquam fugiat, ab earum? Neque eum architecto, ipsum deleniti corrupti magnam eaque iusto corporis.',
  image: 'http://localhost:3000/static/media/comp2.61e3a393.jpg',
};
const DetailsPage = () => (
  <DetailsTemplate id={state.id} title={state.title} content={state.content} image={state.image} />
);

export default DetailsPage;
