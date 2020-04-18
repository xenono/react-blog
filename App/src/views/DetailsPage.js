import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withContext from 'hoc/withContext';
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
      },
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const { context } = this.props;

    axios
      .get(`http://localhost:8081/${context}/${id}`)
      .then(({ data }) => this.setState({ activeItem: data }))
      .catch(err => console.log(err));
  }

  render() {
    const { context } = this.props;
    const { activeItem } = this.state;

    return (
      <DetailsTemplate
        id={activeItem.id}
        title={activeItem.title}
        content={activeItem.content}
        image={activeItem.imageUrl}
        pageType={context}
      />
    );
  }
}

const mapStateToProps = ({ post }) => ({ post });

DetailsPage.propTypes = {
  match: PropTypes.string.isRequired,
  context: PropTypes.string.isRequired,
};

export default withContext(connect(mapStateToProps)(DetailsPage));
