import React from "react";
import { Link } from "react-router-dom";

class EditUser extends React.Component {
  state = {
    id: this.props.data.id,
    name: this.props.data.name,
    email: this.props.data.email,
    message: this.props.data.message,
    formIsValid:true
  };

  getName = this.getName.bind(this);
  getEmail = this.getEmail.bind(this);
  getMessage = this.getMessage.bind(this);

  getName(event) {
    this.setState({
      name: event.target.value,
    });
  };

  getEmail (event) {
    this.setState({
      email: event.target.value,
    });   
  };

  getMessage(event) {
    this.setState({
      message: event.target.value,
    });
  };

  onSendData = (event) => {
      fetch("http://localhost:8000/api/users/" + this.state.id +"/" ,{
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
    
  };

  render() {
    // console.log("Props =>", this.props);
    console.log(this.state.name)
    return (
      <div className="AddUser">
        <form onSubmit={this.onSendData}>
          <input
            type="text"
            className="form-control"
            value={this.state.name}
            onChange={this.getName}
          />
          <input
            type="text"
            value={this.state.email}
            className="form-control"
            onChange={this.getEmail}
          />
          <textarea
            maxLength="600"
            type="text"
            value={this.state.message}
            className="form-control"
            onChange={this.getMessage}
          />
          <button className="btn btn-success" type="submit">
            Change user
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
