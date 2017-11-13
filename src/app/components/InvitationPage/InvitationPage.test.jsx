import React from 'react';
import { mount } from 'enzyme';
import { InvitationPageComp } from './InvitationPage';

describe('InvitationPageComp', () => {
  let invitationPageComp;
  let testProps;
  beforeEach(() => {
    invitationPageComp = mount(<InvitationPageComp />);
    testProps = {
      showInviteForm: jest.fn(),
    };
  });

  describe('the showInviteFormButton', () => {
    it('calls the showInviteForm prop function when clicked', () => {
      invitationPageComp.find('#showInviteFormButton').simulate('click');
      expect(testProps.showInviteForm).toHaveBeenCalled();
    });
  });
});
