import { ACTION_TYPES } from '../actions/inviteActions';

const defaultState = {
  invitePopupVisible: false,
};

const inviteReducer = (state = defaultState, action) => {
  switch (action.type) {
  case ACTION_TYPES.SHOW_INVITE_FORM:
    return { ...state, invitePopupVisible: true };
  default:
    return state;
  }
};

export default inviteReducer;
