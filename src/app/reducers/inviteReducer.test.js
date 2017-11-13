import inviteReducer from './inviteReducer';
import { showInviteForm } from '../actions/inviteActions';

describe('inviteReducer', () => {
  let testState;

  beforeEach(() => {
    testState = {};
  });

  describe('the default state', () => {
    it('has state.showInviteFOrm as false', () => {
      expect(inviteReducer(undefined, {})).toMatchObject({ invitePopupVisible: false });
    });
  });

  describe('when passed an invalid action type', () => {
    it('return the state unchanged', () => {
      expect(inviteReducer(testState, { type: '' })).toBe(testState);
    });
  });

  describe('When reducing a SHOW_INVITE_FORM action', () => {
    it('sets state.showInviteForm to true', () => {
      expect(inviteReducer(testState, showInviteForm())).toMatchObject({ invitePopupVisible: true });
    });
  });
});
