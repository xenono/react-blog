import React from 'react';
import MainTemplate from 'templates/MainTemplate';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Blog from 'views/Blog';
import Tutorials from 'views/Tutorials';
import Homepage from 'views/Homepage';
import store from 'store';
import { Provider } from 'react-redux';
import DetailsPage from './DetailsPage';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/blog" component={Blog} />
          <Route path="/blog/:id" component={DetailsPage} />
          <Route exact path="/tutorials" component={Tutorials} />
          <Route path="/tutorials/:id" component={DetailsPage} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default Root;
