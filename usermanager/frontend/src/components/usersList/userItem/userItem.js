import React from "react";
import { Link } from "react-router-dom";

class UserItem extends React.Component {
  state = {
    id: this.props.id,
    name: this.props.name,
    email: this.props.email,
    message: this.props.message,
  };

  render() {
    const { id, name, email, message } = this.state;
    return (
      <tbody>
        <tr className="priority-200">
          <td className="name">{id}</td>
          <td className="clicks">{name}</td>
          <td className="priority">{email}</td>
          <td className="impressions">{message}</td>
          <td className="delete">
            <button className="delete-btn" onClick={this.props.onDeleteItem}>
              <i className="fas fa-trash-alt" title="delete row"></i>
            </button>
          </td>
          <td className="edit">
            <Link to="/EditUser">
              <button className="edit-btn" onClick={this.props.onEditItem}>
                <i className="fas fa-edit"></i>
              </button>
            </Link>
          </td>
        </tr>
      </tbody>
    );
  }
}

export default UserItem;
