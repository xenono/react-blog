import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Heading from 'components/atoms/Heading/Heading';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import { connect } from 'react-redux';
import { addItem as addNewItem } from 'actions';

const StyledWrapper = styled.div`
  position: relative;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledHeading = styled(Heading)`
  font-size: 5rem;
  margin-bottom: 1em;
`;

const StyledTextArea = styled(Input)`
  width: 100%;
  font-size: 2rem;
  overflow-y: scroll;
  padding: 10px;
  min-height: 150px;
  text-align: left;
  /* background: #808080; */
  border: 2px solid ${({ theme }) => theme.primary};
  margin-bottom: 4em;
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

const StyledFormErrorMessage = styled.div`
  width: 100%;
  position: absolute;
  left: 50%;
  bottom: -20%;
  transform: translateX(-50%);
  font-size: 1.7rem;
  font-weight: bold;
  text-align: center;
  padding: 0.3em 0.7em;
  border-radius: 20px;
  border: 3px solid ${({ theme }) => theme.tertiary};
  background-color: ${({ theme }) => theme.secondary};
`;

const AddItemForm = ({ itemType, addItem }) => (
  <StyledWrapper>
    <StyledHeading>Add {itemType.slice(0, itemType.length - 1)}</StyledHeading>
    <StyledFormik
      initialValues={{ title: '', content: '', imageUrl: '', videoUrl: '' }}
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
        addItem(itemType, values);
        resetForm();
      }}
    >
      {({ values, handleBlur, handleChange }) => (
        <StyledForm>
          <StyledFieldContainer>
            <Input as={Field} type="text" name="title" placeholder="Title" />
            <StyledErrorMessage name="title" component="div" />
          </StyledFieldContainer>
          <StyledFieldContainer>
            <Input as={Field} type="text" name="imageUrl" placeholder="Image Url" />
            <StyledErrorMessage name="imageUrl" component="div" />
          </StyledFieldContainer>
          {itemType === 'tutorials' && (
            <StyledFieldContainer>
              <Input as={Field} type="text" name="videoUrl" placeholder="Video Url" />
              <StyledErrorMessage name="videoUrl" component="div" />
            </StyledFieldContainer>
          )}
          <StyledFieldContainer>
            <StyledTextArea
              as="textarea"
              type="text"
              name="content"
              placeholder="Content"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.content}
            />
            <StyledErrorMessage name="content" component="div" />
          </StyledFieldContainer>
          <Button type="submit">Submit</Button>
        </StyledForm>
      )}
    </StyledFormik>
  </StyledWrapper>
);

AddItemForm.propTypes = {
  itemType: PropTypes.string.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addItem: (itemType, itemData) => dispatch(addNewItem(itemType, itemData)),
});

export default connect(null, mapDispatchToProps)(AddItemForm);
