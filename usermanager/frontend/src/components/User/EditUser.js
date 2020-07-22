import React from "react";
import { connect } from "react-redux";

//Actions
import { currentUser } from "../../actions/users";



class EditUser extends React.Component {
  state = {
    name: "",
    email: "",
    message: "",
  };

  onSubmit = (event) => {
    event.preventDefault();
    const { name, email, message } = this.state;
    const user = { name, email, message };  
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Edit user</h2>
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
const mapStateToProps = (state) => {
    console.log("EditUser state: ", state);
    return {
        singleUser: state.users.singleUser
    };
  };

export default connect(mapStateToProps, { currentUser })(EditUser);
