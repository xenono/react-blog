import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Post from 'components/molecules/Post/Post';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import { updateItem as updateItemById } from 'actions';

const StyledWrapper = styled.div`
  z-index: 999;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledModalContainer = styled.div`
  width: 100%;
  height: 90%;
  background-color: white;
  display: flex;
  align-items: center;
  position: relative;
  @media (max-width: 780px) {
    height: 100vh;
    flex-direction: column;
  }
`;

const StyledFormWrapper = styled.div`
  position: relative;
  max-width: 600px;
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 480px) {
    margin: 40px auto;
  }
`;

const StyledHeading = styled(Heading)`
  font-size: 5rem;
  margin-bottom: 1em;
`;

const StyledFormContainer = styled.div`
  width: 50%;
  @media (max-width: 780px) {
    width: 95%;
  }
`;
const StyledPostContainer = styled.div`
  width: 50%;
  padding: 5%;
  @media (max-width: 780px) {
    width: 75%;
  }
  @media (max-width: 500px) {
    width: 90%;
  }
`;

const StyledTextArea = styled(Input)`
  width: 100%;
  font-size: 2rem;
  overflow-y: scroll;
  padding: 10px;
  min-height: 150px;
  text-align: left;
  border: 2px solid ${({ theme }) => theme.primary};
  margin-bottom: 4em;

  @media (max-width: 780px) {
    margin-bottom: 1em;
  }
`;

const StyledFieldContainer = styled.div`
  width: 100%;
  position: relative;
`;
const StyledForm = styled(Form)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledFormik = styled(Formik)`
  width: 80%;
`;

const StyledErrorMessage = styled(ErrorMessage)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.2rem;
  font-weight: bold;
  bottom: 35px;
  padding: 0.3em 0.7em;
  border-radius: 20px;

  background-color: ${({ theme }) => theme.secondary};
`;
const ExitButton = styled(Button)`
  z-index: 999;
  position: absolute;
  right: 5%;
  top: 7.5%;
  @media (max-width: 780px) {
    top: 1%;
    right: 1%;
    max-width: 60px;
  }
`;

const UpdateItemModal = ({
  itemType,
  id,
  title,
  content,
  imageUrl,
  videoUrl,
  onExitAction,
  updateItem,
}) => {
  const [currentValues, setCurrentValues] = useState({
    id,
    title: '',
    content: '',
    imageUrl: '',
    videoUrl: '',
  });

  return (
    <StyledWrapper>
      <ExitButton onClick={onExitAction}> X </ExitButton>
      <StyledModalContainer>
        <StyledFormContainer>
          <StyledFormWrapper>
            <StyledHeading>Update {itemType.slice(0, itemType.length - 1)}</StyledHeading>
            <StyledFormik
              initialValues={{ id, title, content, imageUrl, videoUrl }}
              validate={values => {
                const errors = {};
                if (!values.title) {
                  errors.title = 'Title is required';
                }
                if (!values.imageUrl) {
                  errors.imageUrl = 'Image Url is required';
                }
                if (!values.videoUrl && itemType === 'tutorials') {
                  errors.videoUrl = 'Video Url is required';
                }
                if (!values.content) {
                  errors.content = 'Content is required';
                }

                return errors;
              }}
              onSubmit={(values, { resetForm }) => {
                updateItem(itemType, values);
                resetForm();
                onExitAction();
              }}
            >
              {({ values, handleBlur, handleChange }) => {
                setCurrentValues(values);
                return (
                  <StyledForm>
                    <StyledFieldContainer>
                      <Input
                        as={Field}
                        type="text"
                        name="title"
                        placeholder="Title"
                        onChange={event => handleChange(event)}
                      />
                      <StyledErrorMessage name="title" component="div" />
                    </StyledFieldContainer>
                    <StyledFieldContainer>
                      <Input
                        as={Field}
                        type="text"
                        name="imageUrl"
                        placeholder="Image Url"
                        onChange={event => handleChange(event)}
                      />
                      <StyledErrorMessage name="imageUrl" component="div" />
                    </StyledFieldContainer>
                    {itemType === 'tutorials' && (
                      <StyledFieldContainer>
                        <Input
                          as={Field}
                          type="text"
                          name="videoUrl"
                          placeholder="Video Url"
                          onChange={event => handleChange(event)}
                        />
                        <StyledErrorMessage name="videoUrl" component="div" />
                      </StyledFieldContainer>
                    )}
                    <StyledFieldContainer>
                      <StyledTextArea
                        as="textarea"
                        type="text"
                        name="content"
                        placeholder="Content"
                        onChange={event => handleChange(event)}
                        onBlur={handleBlur}
                        value={values.content}
                      />
                      <StyledErrorMessage name="content" component="div" />
                    </StyledFieldContainer>
                    <Button type="submit">Update</Button>
                  </StyledForm>
                );
              }}
            </StyledFormik>
          </StyledFormWrapper>
        </StyledFormContainer>
        <StyledPostContainer>
          <Post
            id={currentValues.id}
            title={currentValues.title}
            content={currentValues.content}
            imageUrl={currentValues.imageUrl}
            videoUrl={currentValues.videoUrl}
            pageType={itemType}
          />
        </StyledPostContainer>
      </StyledModalContainer>
    </StyledWrapper>
  );
};

UpdateItemModal.propTypes = {
  itemType: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  videoUrl: PropTypes.string.isRequired,
  onExitAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  updateItem: (itemType, data) => dispatch(updateItemById(itemType, data)),
});

export default connect(null, mapDispatchToProps)(UpdateItemModal);
