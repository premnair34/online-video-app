import { CREATE_USER, LOGIN_USER, SET_USER_DETAILS } from "../actions/actionTypes";
const initialState = {
  role_name:'',
  loginDetails:null,
  userDetails:null
}
export default function(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER:
      return { ...state,...action.payload };
    case LOGIN_USER:
      return { ...state, loginDetails: action.payload };
    case SET_USER_DETAILS:
      return { ...state, userDetails: action.payload.data,role_name:action.payload.data.role_name };
    default:
      return state;
  }
}
