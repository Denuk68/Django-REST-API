import axios from "axios";

import {
  GET_USERS,
  DELETE_USER,
  ADD_USER,
  LOAD_USER,
  EDIT_USER,
} from "./actions";
import { returnErrors, createMessage } from "../actions/messages";

export const getUsers = () => (dispatch) => {
  axios
    .get("/api/users/")
    .then((res) => {
      dispatch({
        type: GET_USERS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteUser = (id) => (dispatch) => {
  axios
    .delete(`/api/users/${id}`)
    .then((res) => {
      dispatch({
        type: DELETE_USER,
        payload: id,
      });
    })
    .catch((err) => dispatch(returnErrors(err.response.data.status)));
};

// export const loadUsersFromJsp = () => (dispatch) => {
//   axios
//     .get("https://jsonplaceholder.typicode.com/users?_limit=8")
//     .then((response) => {
//       // new_users = response.data.map(user => ({username = }))
//       // dispatch({
//       //   type: LOAD_FROM_JSP,
//       //   payload: response.data,
//       // });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

export const addUser = (user) => (dispatch) => {
  axios
    .post("/api/users/", user)
    .then((res) => {
      dispatch({
        type: ADD_USER,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};

export const fillFields = (user) => (dispatch) => {
  dispatch({
    type: LOAD_USER,
    payload: user,
  });
};

export const editUser = (user) => (dispatch) => {
  // console.log("action:", user);
  axios
    .put(`/api/users/${user.id}/`, user)
    .then((res) => {
      dispatch({
        type: EDIT_USER,
        payload: user,
      });
    })
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};