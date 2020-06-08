import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentProfile } from "../../actions/profileActions";
import Spinner from "../../layouts/Spinner";

export default function Dashboard() {
  const loading = useSelector((state) => state.auth.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentProfile());
  }, [dispatch]);

  const user = useSelector((state) => state.profile.profile);
  console.log(user.company);

  return loading ? (
    <Spinner />
  ) : (
    <>
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user" /> Welcome {user && user.name}
      </p>
      {user !== null ? <>has</> : <>has not {user.company}</>}
    </>
  );
}
