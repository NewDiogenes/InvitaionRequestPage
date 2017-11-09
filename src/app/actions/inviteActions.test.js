import { showInviteForm } from './inviteActions';

describe('inviteActions', () => {
  describe('showInviteForm', () => {
    it('returns a SHOW_INVITE_FORM action', () => {
      expect(showInviteForm().type).toBe('SHOW_INVITE_FORM');
    });
  });
});
