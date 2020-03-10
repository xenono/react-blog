import laptop from 'assets/comp2.jpg';

const initialState = {
  posts: [
    {
      id: 1,
      title: 'Writing beautiful JavaScript',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste enim nam modieos quibusdam maiores labore quisquam fugiat, ab earum? Neque eum architecto, ipsum deleniti corrupti magnam eaque iusto corporis.',
      image: laptop,
    },
    {
      id: 2,
      title: 'CSS is powerfull',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste enim nam modieos quibusdam maiores labore quisquam fugiat, ab earum? Neque eum architecto, ipsum deleniti corrupti magnam eaque iusto corporis.',
      image: 'https://basement-code.pl/wp-content/uploads/2018/01/maik-jonietz-535261.jpg',
    },
    {
      id: 3,
      title: 'TypeScript tutorial',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste enim nam modieos quibusdam maiores labore quisquam fugiat, ab earum? Neque eum architecto, ipsum deleniti corrupti magnam eaque iusto corporis.',
      image:
        'https://i1.wp.com/storage.googleapis.com/blog-images-backup/1*D8Wwwce8wS3auLAiM3BQKA.jpeg?ssl=1',
    },
  ],
  tutorials: [
    {
      id: 1,
      title: 'Animated slider',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste enim nam modieos quibusdam maiores labore quisquam fugiat',
      link: 'www.youtube.com',
      image: 'https://www.pozycjonusz.pl/wp-content/uploads/2019/05/java-script-SEO.jpg',
    },
    {
      id: 2,
      title: 'React Redux practise',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste enim nam modieos quibusdam maiores labore quisquam fugiat',
      link: 'www.youtube.com',
      image:
        'https://i0.wp.com/blog.logrocket.com/wp-content/uploads/2018/09/react-redux-connect-tutorial.jpeg?fit=730%2C395&ssl=1',
    },
    {
      id: 3,
      title: 'React Router Power',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste enim nam modieos quibusdam maiores labore quisquam fugiat',
      link: 'www.youtube.com',
      image:
        'https://repository-images.githubusercontent.com/19872456/05dca500-f010-11e9-9588-a96554294e4e',
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  return state;
};

export default rootReducer;
