import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TitleBar from '../TitleBar/TitleBar';

export const COMPANY_NAME = 'Broccoli & Co.';

export const LayoutComponent = ({ children, className }) => (
  <div className={ className }>
    <TitleBar text={ COMPANY_NAME } />
    <div className='app-main'>
      { children }
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
font-family: arial;
.app-main {
  box-sizing: border-box;
  display: flex;
  justify-items: center;
  flex-direction: column;
  padding: auto;
  flex-basis: auto;
}
`;
