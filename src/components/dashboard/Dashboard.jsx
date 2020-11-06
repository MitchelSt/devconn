import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentProfile, deleteAccount } from "../../actions/profileActions";
import Spinner from "../../layouts/Spinner";
import DashboardActions from "./DashboardActions";
import Experience from "./Experience";
import Education from "./Education";
import { useHistory } from "react-router-dom";
import { logout } from "../../actions/authActions";

export default function Dashboard() {
  const loading = useSelector((state) => state.auth.loading);
  const history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentProfile());
  }, []);

  const user = useSelector((state) => state.auth.user);

  return loading ? (
    <Spinner />
  ) : (
    <>
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user" /> Welcome {user && user.user}
      </p>
      {user !== null ? (
        <>
          <DashboardActions />
          <Experience />
          <Education />
          <div className="my-2">
            <button
              className="btn btn-danger"
              onClick={() => {
                deleteAccount();
                dispatch(logout());
                history.push("/");
              }}
            >
              <i className="fas fa-user-minus" /> Delete My Account
            </button>
          </div>
        </>
      ) : (
        <>has not {user}</>
      )}
    </>
  );
}
