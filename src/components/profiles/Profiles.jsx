import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProfiles } from "../../actions/profileActions";

import Spinner from "../../layouts/Spinner";
import ProfileItem from "./ProfileItem";

export default function Profiles() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.profile.loading);
  const profiles = useSelector((state) => state.profile.profiles);

  useEffect(() => {
    dispatch(getAllProfiles());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h1 className="large text-primary">Developers</h1>
          <p className="lead">
            <i className="fab fa-connectdevelop" /> Browse and connect with
            developers
          </p>
          <div className="profiles">
            {profiles.length > 0 ? (
              profiles.map((profile) => (
                <ProfileItem key={profile._id} profile={profile} />
              ))
            ) : (
              <h4>No profiles found...</h4>
            )}
          </div>
        </>
      )}
    </>
  );
}
