import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import { connect } from 'react-redux';
import Post from 'components/molecules/Post/Post';
import GridTemplate from 'templates/GridTemplate';
import LoadingIcon from 'components/atoms/LoadingIcon/LoadingIcon';
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
          <GridTemplate>
            {tutorials.map(({ _id: id, title, content, imageUrl }) => (
              <Post
                id={id}
                title={title}
                content={content}
                imageUrl={imageUrl}
                key={id}
                pageType="posts"
              />
            ))}
          </GridTemplate>
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
