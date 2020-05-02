import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import { connect } from 'react-redux';
import Post from 'components/molecules/Post/Post';
import LoadingIcon from 'components/atoms/LoadingIcon/LoadingIcon';
import GridTemplate from 'templates/GridTemplate';
import ItemsListTemplate from 'templates/ItemsListTemplate';
import { fetchItems } from 'actions';

class Tutorials extends React.Component {
  componentDidMount() {
    this.props.fetchTutorials();
  }

  render() {
    const { tutorials } = this.props;
    return (
      <UserPageTemplate primary>
        {tutorials.length ? (
          <ItemsListTemplate itemsArray={tutorials} itemType="tutorials" />
        ) : (
          <LoadingIcon />
        )}
      </UserPageTemplate>
    );
  }
}

const mapStateToProps = ({ tutorials }) => ({ tutorials });

const mapDispatchToProps = dispatch => ({
  fetchTutorials: () => dispatch(fetchItems('tutorials')),
});
export default connect(mapStateToProps, mapDispatchToProps)(Tutorials);
