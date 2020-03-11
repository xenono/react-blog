import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DetailsTemplate from 'templates/DetailsTemplate';

const state = {
  id: 1,
  title: 'Writing beautiful JavaScript',
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste enim nam modieos quibusdam maiores labore quisquam fugiat, ab earum? Neque eum architecto, ipsum deleniti corrupti magnam eaque iusto corporis.',
  image: 'http://localhost:3000/static/media/comp2.61e3a393.jpg',
};

class DetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageType: 'blog',
    };
  }

  componentDidMount() {
    switch (this.props.match.path) {
      case 'blog':
        this.setState({ pageType: 'blog' });
        break;
      case 'tutorials':
        this.setState({ pageType: 'tutorials' });
        break;

      default:
        this.setState({ pageType: 'blog' });
    }
  }

  render() {
    const { pageType } = this.state;
    return (
      <DetailsTemplate
        id={state.id}
        title={state.title}
        content={state.content}
        image={state.image}
        pageType={pageType}
      />
    );
  }
}

DetailsPage.propTypes = {
  match: PropTypes.string.isRequired,
};

export default DetailsPage;
