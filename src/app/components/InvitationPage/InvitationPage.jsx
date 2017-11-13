import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const InvitationPageComponent = ({ showInviteForm }) => (
  <div>
    <button id='showInviteFormButton' onClick={ showInviteForm } />
  </div>
);

InvitationPageComponent.propTypes = {
  showInviteForm: PropTypes.func.isRequired,
};

export default styled(InvitationPageComponent)`
`;
