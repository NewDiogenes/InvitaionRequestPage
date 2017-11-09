import React from 'react';
import PropTypes from 'prop-types';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';

const reducers = combineReducers({
});

export const store = createStore(reducers);

const Watch = ({ pages }) => (
  <Provider store={ store } >
    <BrowserRouter>
      <Layout>
        <Switch>
          {pages.map((page) =>
            <Route exact path={ page.path } component={ page.component } />)}
        </Switch>
      </Layout>
    </BrowserRouter>
  </Provider>
);

Watch.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    component: PropTypes.func,
  })).isRequired,
};

export default Watch;

