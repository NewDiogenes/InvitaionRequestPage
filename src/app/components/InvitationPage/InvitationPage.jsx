import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const InvitationPageComponent = ({ className, showInviteForm }) => (
  <div className={ className }>
    <h1>A better way to enjoy every day.</h1>
    <h5>Be the first to know when we launch.</h5>
    <button id='showInviteFormButton' onClick={ showInviteForm }>
      Request an Invite
    </button>
  </div>
);

InvitationPageComponent.propTypes = {
  className: PropTypes.string,
  showInviteForm: PropTypes.func.isRequired,
};

InvitationPageComponent.defaultProps = {
  className: '',
};

export default styled(InvitationPageComponent)`
box-sizing: border-box;
display: flex;
justify-items: center;
flex-direction: column;
align-content: stretch;
padding: 10%;
h1 {
  text-align: center;
  color: slateGrey;
  flex-basis: auto;
}

h5 {
  text-align: center;
  color: darkGrey;
  flex-basis: auto;
}

#showInviteFormButton {
  width: 16em;
  height: 4em;
  background-color: white;
  border-style: solid;
  border-width: 1px;
  border-color: darkGrey;
  color: slateGrey;
  margin: 0 auto;
  flex-basis: auto;
  font-weight: bold;
}
`;
