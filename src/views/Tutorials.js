import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Post from 'components/molecules/Post/Post';
import GridTemplate from 'templates/GridTemplate';

const Tutorials = ({ tutorials }) => (
  <UserPageTemplate primary>
    <GridTemplate>
      {tutorials.map(({ id, title, content, image }) => (
        <Post id={id} title={title} content={content} image={image} key={id} pageType="tutorials" />
      ))}
    </GridTemplate>
  </UserPageTemplate>
);

const mapStateToProps = ({ tutorials }) => ({ tutorials });

export default connect(mapStateToProps)(Tutorials);
