import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { fetchItems as fetchAllItemsOfType } from 'actions';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import LoadingIcon from 'components/atoms/LoadingIcon/LoadingIcon';
import Post from 'components/molecules/Post/Post';
import GearIcon from 'assets/symbol.png';
import Controls from 'providers/Controls';
import ControlsList from 'components/molecules/ControlsList/ControlsList';
import GridTemplate from '../../../templates/GridTemplate';

const PostWrapper = styled.div`
  position: relative;
`;
const StyledGearButton = styled(Button)`
  width: 50px;
  height: 50px;
  background-image: url(${GearIcon});
  background-position: center;
  background-size: 40px;
  background-repeat: no-repeat;
  border-radius: 0;
  margin: 0 0 0 auto;
`;

const StyledControlsContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

const ItemsList = ({ itemsArray, itemType, fetchItems, searchFilter }) => {
  const listContainer = useRef(null);

  // const listener = event => {
  //   if (!listContainer.current || listContainer.current.contains(event.target)) {
  //     return;
  //   }
  //   console.log('xd');
  //   console.log(isModalVisible);
  //   setModalVisibility(false);
  //   console.log(isModalVisible);
  // };

  useEffect(() => {
    fetchItems(itemType);
    // document.addEventListener('mousedown', listener);

    // return () => {
    //   document.removeEventListener('mousedown', listener);
    // };
  });

  return (
    <GridTemplate>
      {itemsArray.length ? (
        itemsArray
          .filter(item => item.title.toLowerCase().includes(searchFilter.toLowerCase()))
          .map(({ _id: id, title, content, imageUrl, videoUrl }) => (
            <Controls
              render={({ areControlsVisible, toggleControlsVisibility }) => (
                <PostWrapper>
                  <Post
                    id={id}
                    title={title}
                    content={content}
                    imageUrl={imageUrl}
                    videoUrl={videoUrl}
                    key={id}
                    pageType={itemType}
                  />
                  <StyledControlsContainer>
                    <StyledGearButton onClick={toggleControlsVisibility} />
                    {areControlsVisible && <ControlsList ref={listContainer} />}
                  </StyledControlsContainer>
                </PostWrapper>
              )}
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
  searchFilter: PropTypes.string,
};

ItemsList.defaultProps = {
  itemType: 'posts',
  searchFilter: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
