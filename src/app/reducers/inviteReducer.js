import { ACTION_TYPES } from '../actions/inviteActions';

const defaultState = {
  showInviteForm: false,
};

const inviteReducer = (state = defaultState, action) => {
  switch (action.type) {
  case ACTION_TYPES.SHOW_INVITE_FORM:
    return { ...state, showInviteForm: true };
  default:
    return state;
  }
};

export default inviteReducer;
