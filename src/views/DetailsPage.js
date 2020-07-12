import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import DetailsTemplate from 'templates/DetailsTemplate';

class DetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: {
        id: '',
        title: '',
        content: '',
        imageUrl: '',
        videoUrl: '',
      },
      pageType: this.props.match.path.split('/')[1],
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const { pageType } = this.state;

    axios
      .get(`https://xenono-react-blog-backend.herokuapp.com/${pageType}/${id}`)
      .then(({ data }) => this.setState({ activeItem: data }))
      .catch(err => console.log(err));
  }

  render() {
    const { activeItem } = this.state;
    const { pageType } = this.state;

    return (
      <DetailsTemplate
        id={activeItem.id}
        title={activeItem.title}
        content={activeItem.content}
        image={activeItem.imageUrl}
        video={activeItem.videoUrl}
        pageType={pageType}
      />
    );
  }
}

DetailsPage.propTypes = {
  match: PropTypes.string.isRequired,
};

export default DetailsPage;
