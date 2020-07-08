import React from "react";
import { Link } from "react-router-dom";

class EditUser extends React.Component {
  state = {
    id: this.props.id,
    name: this.props.name,
    email: this.props.email,
    message: this.props.message,  
  };

  getName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  getEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  getMessage = (event) => {
    this.setState({
      message: event.target.value,
    });
  };

  onSendData = (event) => {
    fetch("http://localhost:8000/api/users/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        message: this.state.message,
      }),
    }).catch((err) => console.log(err.message));

    alert(this.state.name + " було змінено !");
  };

  render() {    
    return (
      <div className="AddUser">
        <form onSubmit={this.onSendData}>
          <input
            type="text"
            placeholder="Name"
            className="form-control"
            onChange={this.getName}
          />
          <input
            type="text"
            placeholder="Email"
            className="form-control"
            onChange={this.getEmail}
          />
          <textarea
            maxLength="600"
            type="text"
            placeholder="Message"
            className="form-control"
            onChange={this.getMessage}
          />
          <button className="btn btn-success" type="submit">
            Change  user
          </button>
        </form>
        <Link to="/" className="btn btn-link">
          Back to Home
        </Link>
      </div>
    );
  }
}

export default EditUser;