import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Blog from 'views/Blog';
import Tutorials from 'views/Tutorials';
import Homepage from 'views/Homepage';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/blog" component={Blog} />
        <Route path="/tutorials" component={Tutorials} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
