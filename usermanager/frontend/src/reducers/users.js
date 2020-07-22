import {
  GET_USERS,
  DELETE_USER,
  ADD_USER,
  LOAD_USER,
} from "../actions/actions";

const initialState = {
  users: [],
  currentUser: null,
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
    case LOAD_USER:
      const currentUser = action.payload;
      return {
        ...state,
        currentUser,
      };      
    default:
      return state;
  }
}
