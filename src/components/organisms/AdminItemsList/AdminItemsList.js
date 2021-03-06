import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { fetchItems as fetchAllItemsOfType } from 'actions';
import GearIcon from 'assets/symbol.png';
import ServerError from 'providers/ServerError';
import PopUp from 'components/molecules/PopUp/PopUp';
import PropTypes from 'prop-types';
import LoadingIcon from 'components/atoms/LoadingIcon/LoadingIcon';
import Post from 'components/molecules/Post/Post';
import ControlsList from 'components/molecules/ControlsList/ControlsList';
import GridTemplate from '../../../templates/GridTemplate';

const PostWrapper = styled.div`
  position: relative;
`;

const ItemsList = ({ itemsArray, itemType, fetchItems, searchFilter }) => {
  useEffect(() => {
    fetchItems(itemType);
  });

  return (
    <>
      <ServerError
        render={({ isError, toggleError }) => (
          <>{isError && <PopUp onConfirmationAction={toggleError} />}</>
        )}
      />
      <GridTemplate>
        {itemsArray.length ? (
          itemsArray
            .filter(item => item.title.toLowerCase().includes(searchFilter.toLowerCase()))
            .map(({ _id: id, title, content, imageUrl, videoUrl }) => (
              <PostWrapper>
                <Post
                  key={id}
                  id={id}
                  title={title}
                  content={content}
                  imageUrl={imageUrl}
                  videoUrl={videoUrl}
                  pageType={itemType}
                />
                <ControlsList
                  key={`${id} ${title}`}
                  itemId={id}
                  itemType={itemType}
                  itemTitle={title}
                  itemContent={content}
                  itemImageUrl={imageUrl}
                  itemVideoUrl={videoUrl}
                  icon={GearIcon}
                />
              </PostWrapper>
            ))
        ) : (
          <LoadingIcon />
        )}
      </GridTemplate>
    </>
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
  searchFilter: PropTypes.string,
};

ItemsList.defaultProps = {
  itemType: 'posts',
  searchFilter: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
