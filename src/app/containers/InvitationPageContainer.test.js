import { mapStateToProps, mapDispatchToProps } from './InvitationPageContainer';

describe('InvitationContainer', () => {
  describe('mapDispatchToProps', () => {
    let mappedDispatch;
    let mockDispatch;
    beforeEach(() => {
      mockDispatch = jest.fn();
      mappedDispatch = mapDispatchToProps(mockDispatch);
    });

    it('maps showInvite to dispatch a SHOW_INVITE_FORM action', () => {
      mappedDispatch.showInviteForm();
      expect(mockDispatch).toHaveBeenCalledWith({ type: 'SHOW_INVITE_FORM' });
    });
  });

  describe('mapStateToProps', () => {
    const mockState = {
      invite: {
        invitePopupVisible: 'mock value',
      },
    };

    it('maps invitePopupVisible to the invitePopupVisible prop', () => {
      expect(mapStateToProps(mockState)).toMatchObject({
        invitePopupVisible: mockState.invite.invitePopupVisible,
      });
    });
  });
});
