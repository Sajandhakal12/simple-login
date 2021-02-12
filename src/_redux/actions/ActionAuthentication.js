import * as ActionTypes from "../ActionTypes";

export const loginUser = (user, history) => async (dispatch) => {
  try {
    localStorage.setItem("token", "sdafsdjkflja");
    dispatch({ type: ActionTypes.SET_LOGGEDIN });
    dispatch({ type: ActionTypes.SET_USER, payload: user });
    alert("login successful");
    history.push("/");
  } catch (e) {}
};

export const logoutUser = () => async (dispatch) => {
  try {
    localStorage.removeItem("token");
    dispatch({ type: ActionTypes.SET_LOGGEDOUT });
  } catch (e) {
    console.log(e);
  }
};
