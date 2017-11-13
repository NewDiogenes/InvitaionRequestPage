import { connect } from 'react-redux';
import { showInviteForm } from '../actions/inviteActions';
import InvitationPage from '../components/InvitationPage/InvitationPage';

export const mapDispatchToProps = (dispatch) => (
  {
    showInviteForm: () => {
      dispatch(showInviteForm());
    },
  }
);

export const mapStateToProps = (state) => (
  {
    invitePopupVisible: state.invite.invitePopupVisible,
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(InvitationPage);
