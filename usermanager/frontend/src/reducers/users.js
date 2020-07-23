import {
  GET_USERS,
  DELETE_USER,
  ADD_USER,
  LOAD_USER,
  EDIT_USER,
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
    case EDIT_USER:
      const user = action.payload;
      // let users = state.users;

      // console.log("reducer EDIT_USER user: ", user);
      // console.log("reducer EDIT_USER users: ", state.users);
      const index = state.users.findIndex((element) => {
        return element.id === user.id;
      });
      // console.log(index);

      let newUsers = state.users.slice(0, index);
      newUsers.push(user);
      newUsers = newUsers.concat(state.users.slice(index+1));
      
      // users.splice(index, 1);
      // const users = { ...state, users: state.users.push(user) };
      // console.log("reducer EDIT_USER state: ", users);

      return { ...state, users: newUsers };
      // console.log("reducer EDIT_USER state: ", state);
     
    default:
      return state;
  }
}