import {
  GET_USERS,
  DELETE_USER,
  ADD_USER,
  CURRENT_USER,
} from "../actions/actions";

const initialState = {
  users: [],
  singleUser: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case CURRENT_USER:
      return {
        ...state,
        singleUser: [...state.singleUser, action.payload],
      };
    default:
      return state;
  }
}
