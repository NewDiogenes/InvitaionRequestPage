import React from 'react';
import { mount } from 'enzyme';
import { InvitationPageComponent } from './InvitationPage';

describe('InvitationPageComp', () => {
  let invitationPageComp;
  let testProps;
  beforeEach(() => {
    testProps = {
      showInviteForm: jest.fn(),
    };
    invitationPageComp = mount(<InvitationPageComponent { ...testProps } />);
  });

  describe('the showInviteFormButton', () => {
    it('calls the showInviteForm prop function when clicked', () => {
      invitationPageComp.find('#showInviteFormButton').simulate('click');
      expect(testProps.showInviteForm).toHaveBeenCalled();
    });
  });
});
