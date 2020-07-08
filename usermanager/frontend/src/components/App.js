import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Components

import UsersList from "../components/usersList/UsersList";
import NotFound from "../components/NotFound/NotFound";
import AddUser from "../components/AddUser/AddUser";

class App extends React.Component {
  apiURL = "http://localhost:8000/api/users/";

  state = {
    UsersList: [],
  };

  componentDidMount() {
    this.updateService();
  }

  updateService() {
    fetch(this.apiURL)
      .then((request) => {
        return request.json();
      })
      .then((data) => {
        this.setState({
          UsersList: data,
        });
      })
      .catch((err) => console.log(err.message));
  }

  onDeleteItem = (id) => {
    fetch(this.apiURL + id, {
      method: "DELETE",
    })
      .then((response) => {
        this.updateService();
        console.log(response);
      })
      .catch((err) => console.log(err.message));
  };

  

  render() {
    // console.log("State => ", this.state.UsersList)
    return (
      <Fragment>
        <Router>
          <Switch>
            <Route
                path = "/"
                exact
                render = {()=>(
                <UsersList
                  UsersList={this.state.UsersList}
                  onDeleteItem={this.onDeleteItem}
                />
                )}
            />
            <Route
                path = "/AddUser"
                exact
                render = {()=>(
                <AddUser />
                )}
            />
            <Route
                path = "*"
                exact
                render = {()=>(
                <NotFound />
                )}
            />
          </Switch>
        </Router>
        
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
