import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchItems as fetchAllItemsOfType } from 'actions';
import PropTypes from 'prop-types';
import LoadingIcon from 'components/atoms/LoadingIcon/LoadingIcon';
import Post from 'components/molecules/Post/Post';
import GridTemplate from '../../../templates/GridTemplate';

const ItemsList = ({ itemsArray, itemType, fetchItems }) => {
  useEffect(() => {
    fetchItems(itemType);
  });
  return (
    <GridTemplate>
      {itemsArray.length ? (
        itemsArray.map(({ _id: id, title, content, imageUrl, videoUrl }) => (
          <Post
            id={id}
            title={title}
            content={content}
            imageUrl={imageUrl}
            videoUrl={videoUrl}
            key={id}
            pageType={itemType}
          />
        ))
      ) : (
        <LoadingIcon />
      )}
    </GridTemplate>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { itemsArray: state[ownProps.itemType] };
};
const mapDispatchToProps = () => dispatch => ({
  fetchItems: itemType => dispatch(fetchAllItemsOfType(itemType)),
});

ItemsList.propTypes = {
  fetchItems: PropTypes.func.isRequired,
  itemType: PropTypes.string,
  itemsArray: PropTypes.arrayOf(PropTypes.object).isRequired,
};

ItemsList.defaultProps = {
  itemType: 'posts',
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
