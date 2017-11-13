import React from 'react';
import PropTypes from 'prop-types';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import inviteReducer from './reducers/inviteReducer';

const reducers = combineReducers({
  invite: inviteReducer,
});

const store = createStore(reducers);

const Watch = ({ pages }) => (
  <Provider store={ store } >
    <BrowserRouter>
      <Layout>
        <Switch>
          {pages.map((page) =>
            <Route key={ page.path } exact path={ page.path } component={ page.component } />)}
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

