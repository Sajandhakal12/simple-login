import * as ActionTypes from "../ActionTypes";
import { jwtCheck } from "../../_helpers";

const initialState = {
  isLogged: jwtCheck() ? true : false,
  user: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_USER:
      return {
        ...state,
        isLogged: true,
        user: action.payload,
      };
    case ActionTypes.SET_LOGGEDIN:
      return { ...state, isLogged: true };
    case ActionTypes.SET_LOGGEDOUT:
      return { ...state, isLogged: false, user: [] };

    default:
      return state;
  }
}
