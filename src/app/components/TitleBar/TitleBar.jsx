import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const TitleBarComponent = ({ text, className }) => (
  <div className={ className }>
    { text }
  </div>
);

TitleBarComponent.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default styled(TitleBarComponent)`
background-color: lightSlateGrey;
color: white;
font-size: 3em;
padding: 0.2em 5%;
`;
