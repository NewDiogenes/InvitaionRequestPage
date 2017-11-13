import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TitleBar from '../TitleBar/TitleBar';

export const COMPANY_NAME = 'Broccoli & Co.';

export const LayoutComponent = ({ children, className }) => (
  <div>
    <TitleBar text={ COMPANY_NAME } />
    <div className={ className }>
      <div className='app-side-panel' />
      <div className='app-main'>
        { children }
      </div>
      <div className='app-side-panel' />
    </div>
  </div>
);

LayoutComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]).isRequired,
  className: PropTypes.string.isRequired,
};

export default styled(LayoutComponent)`
width: 100%;
align-items: stretch;
justify-content: center;
border-width: 0px;
display: inline-flex;

.app-side-panel {
  box-sizing: border-box;
  flex-grow: 1;
  flex-basis: auto;
  width: 4em;
}

.app-main {
  display: inline-flex;
  box-sizing: border-box;
  flex-grow: 5;
  flex-basis: auto;
}
`;
