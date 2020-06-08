import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({ component: Component, auth, ...rest }) {
  const authorized = useSelector((state) => state.auth);

  return (
    <Route
      {...rest}
      render={(props) =>
        !authorized.isAuthenticated && !authorized.loading ? (
          <Redirect to="/login" />
        ) : (
          <Component {...props} />
        )
      }
    ></Route>
  );
}
