import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { addUser } from "../../actions/users";

class AddUserForm extends React.Component {
  state = {
    name: "",
    email: "",
    message: "",
  };

  onGetDataFromInput = (event) =>
    this.setState({ [event.target.name]: event.target.value });

  onSubmit = (event) => {
    event.preventDefault();
    const { name, email, message } = this.state;
    const user = { name, email, message };
    this.props.addUser(user);
    this.setState({
      name: "",
      email: "",
      message: "",
    });
  };

  render() {
    // console.log("Currrent state = ", this.state);
    const { name, email, message } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Add new user</h2>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Username</label>
                <input
                  name="name"
                  value={name}
                  onChange={this.onGetDataFromInput}
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  name="email"
                  value={email}
                  onChange={this.onGetDataFromInput}
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <input
                  name="message"
                  value={message}
                  onChange={this.onGetDataFromInput}
                  type="text"
                  className="form-control"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { addUser })(AddUserForm);
