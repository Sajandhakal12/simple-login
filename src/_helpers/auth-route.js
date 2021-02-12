import React from "react";
// import NotFound from "../components/NotFound/NotFound";
import { Route, Redirect } from "react-router-dom";

//redux
import { connect } from "react-redux";

const PrivateRoute = ({
  component: Component,
  roles,
  user,
  isLogged,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => {
      if (!isLogged) {
        return <Redirect to="/login" />;
      }
      return <Component {...props} />;
    }}
  />
);

const AuthRoute = ({ component: Component, isLogged, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      !isLogged === true ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

const mapStateToProps = (state) => ({
  user: state.user.user,
  isLogged: state.user.isLogged,
});

const ContainerCreater = connect(mapStateToProps);

const FirstConnectedComponent = ContainerCreater(PrivateRoute);
const SecondConnectedComponent = ContainerCreater(AuthRoute);

export {
  FirstConnectedComponent as PrivateRoute,
  SecondConnectedComponent as AuthRoute,
};
