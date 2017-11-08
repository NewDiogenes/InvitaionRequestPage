import React from 'react';
import PropTypes from 'prop-types';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

const reducers = combineReducers({
});

export const store = createStore(reducers);

const Watch = ({ pages }) => (
  <Provider store={ store } >
    <BrowserRouter>
      <Switch>
        {pages.map((page) =>
          <Route exact path={ page.path } component={ page.Component } />)}
      </Switch>
    </BrowserRouter>
  </Provider>
);

Watch.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    Component: PropTypes.func,
  })).isRequired,
};

export default Watch;

