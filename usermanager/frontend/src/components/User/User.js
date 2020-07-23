import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getUsers, deleteUser, fillFields } from "../../actions/users";
import AddUserForm from "./AddUserForm";

class Users extends React.Component {
  static propTypes = {
    users: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const { users, deleteUser, fillFields } = this.props;
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
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr className="priority-200" key={user.id}>
                  <td className="name">{user.id}</td>
                  <td
                    className="clicks"
                    onClick={() => {
                      fillFields(user);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    {user.name}
                  </td>
                  <td className="priority">{user.email}</td>
                  <td className="impressions">{user.message}</td>
                  <td className="delete">
                    <button
                      className="delete-btn"
                      onClick={() => deleteUser(user.id)}
                    >
                      <i className="fas fa-trash-alt" title="delete row"></i>
                    </button>
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
  return {
    users: state.users.users,
  };
};
export default connect(mapStateToProps, {
  getUsers,
  deleteUser,
  fillFields,
})(Users);