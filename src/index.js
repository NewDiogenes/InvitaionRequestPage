import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import InvitationPage from './app/components/InvitationPage/InvitationPage';

const pages = [
  {
    path: '/',
    component: InvitationPage,
  },
];
ReactDOM.render(<App pages={ pages } />, document.getElementById('root'));
