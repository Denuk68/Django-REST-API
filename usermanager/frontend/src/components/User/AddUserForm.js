import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { addUser, editUser } from "../../actions/users";

class AddUserForm extends React.Component {
  state = {
    id: null,
    name: "",
    email: "",
    message: "",
    currentUser: this.props.currentUser,
  };

  onGetDataFromInput = (event) => {
    // if (this.props.currentUser) {
    // console.log(1);
    // this.setState({ currentUser: null });
    this.setState({ [event.target.name]: event.target.value });
    // }
  };
  onSubmit = (event) => {
    event.preventDefault();
    // console.log("PROPS: ", this.props);
    // console.log("Current state:", this.state);
    const { name, email, message } = this.state;
    const user = { name, email, message };
    this.props.addUser(user);
    this.setState({
      name: "",
      email: "",
      message: "",
    });
  };
  onEdit = (event) => {
    event.preventDefault();
    // alert(event);
    const {id, name, email, message} = this.state;
    this.props.editUser({id, name, email, message});
  };
  // componentDidMount(){
  //   // this.setState({
  // }
  componentDidUpdate(prevProps) {
    // Популярный пример (не забудьте сравнить пропсы):
    if (this.props.currentUser !== prevProps.currentUser) {
      this.setState({
        id: this.props.currentUser.id,
        name: this.props.currentUser.name,
        email: this.props.currentUser.email,
        message: this.props.currentUser.message,
        currentUser: this.props.currentUser,
      });
    }
    // console.log("componentDidUpdate: ", this.state.currentUser);
  }
  render() {
    let { name, email, message } = this.state;
    const { currentUser } = this.props;
    // if (currentUser) {
    //   name = currentUser.name;
    //   email = currentUser.email;
    //   message = currentUser.message;
    //   // console.log(currentUser);
    // }
    //
    // console.log("props:", this.props);
    // console.log("state:", this.state);
    return (
      <div className="container">
        {/* <span>name:{currentUser ? currentUser.name : ""}</span> */}
        <div className="row">
          <div className="col">
            <form
              onSubmit={this.state.currentUser ? this.onEdit : this.onSubmit}
            >
              <div className="form-group">
                <label htmlFor="name">Username</label>
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelp"
                  name="name"
                  value={name}
                  // defaultValue={currentUser ? currentUser.name : ""}
                  onChange={this.onGetDataFromInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  value={email}
                  onChange={this.onGetDataFromInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <input
                  type="text"
                  className="form-control"
                  name="message"
                  value={message}
                  onChange={this.onGetDataFromInput}
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
  return {
    currentUser: state.users.currentUser,
  };
};

export default connect(mapStateToProps, { addUser, editUser })(AddUserForm);