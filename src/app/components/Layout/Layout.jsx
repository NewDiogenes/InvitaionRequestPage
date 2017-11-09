import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TitleBar from '../TitleBar/TitleBar';

export const COMPANY_NAME = 'Broccoli & Co.';


const Main = styled.div`
box-sizing: border-box;
flex-grow: 5;
flex-basis: auto;
`;

const SidePanel = styled.div`
background-color: whiteSmoke;
box-sizing: border-box;
flex-grow: 1;
flex-basis: auto;
width: 4em;
`;

export const LayoutComponent = ({ children, className }) => (
  <div>
    <TitleBar text={ COMPANY_NAME } />
    <div className={ className }>
      <SidePanel />
      <Main>
        { children }
      </Main>
      <SidePanel />
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
display: inline-flex;
align-items: stretch;
justify-content: center;
border-width: 0px;
`;
