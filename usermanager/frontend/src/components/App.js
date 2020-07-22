import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Users from "../components/user/User";
import Alert from "./alert/alert";
import EditUser from "./User/EditUser";

// Redux
import { Provider } from "react-redux";
import store from "../store";

const options = {
  // you can also just use 'bottom center'
  position: "top center",
  timeout: 5000,
  offset: "30px",
  // you can also just use 'scale'
  transition: "scale",
};

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...options}>
        <Alert />
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
               <Users />               
              )}
            />           
            <Route
              path="/edit"
              exact
              render={() => (
               <EditUser />               
              )}
            />           
          </Switch>
        </Router>        
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));