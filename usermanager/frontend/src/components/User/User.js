import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//Components
import AddUserForm from "./AddUserForm";


//Actions
import { getUsers, deleteUser } from "../../actions/users";


class Users extends React.Component {
  static propTypes = {
    users: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.getUsers();
  }

  getSingleUser = (id) => {  
    const index = this.props.users.findIndex(
      (element) => element.id === id
    );      
    const singleUser = this.props.users[index];
    console.log("singleUser =>" , singleUser)
  }

  render() {
    const { users, deleteUser, } = this.props;
    return (
      <Fragment>
        <div className="outer-container">
          <h1>User Manager Table</h1>
          <table>
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>email</th>
                <th>message</th>
                <th>delete</th>
                <th>edit</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr className="priority-200" key={user.id}>
                  <td className="name">{user.id}</td>
                  <td className="clicks">{user.name}</td>
                  <td className="priority">{user.email}</td>
                  <td className="impressions">{user.message}</td>
                  <td className="delete">
                    <button
                      className="delete-btn"
                      onClick={deleteUser.bind(this, user.id)}
                    >
                      <i className="fas fa-trash-alt" title="delete row"></i>
                    </button>
                  </td>
                  <td className="edit">
                    <Link to="/edit">
                      <button 
                      className="delete-btn"
                      onClick = {this.getSingleUser.bind(this, user.id)}
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <AddUserForm />
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  // console.log("Main state: ", state);
  return {
    users: state.users.users,
  };
};
export default connect(mapStateToProps, { getUsers, deleteUser })(Users);
