import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function DashboardActions() {
  const profile = useSelector((state) => state.profile.profile);

  return (
    <div className="dash-buttons">
      {profile ? (
        <Link to="/edit-profile" className="btn btn-light">
          <i className="fas fa-user-circle text-primary"></i> Edit Profile
        </Link>
      ) : (
        <Link to="/create-profile" className="btn btn-light">
          <i className="fas fa-user-circle text-primary"></i> Create Profile
        </Link>
      )}

      <Link to="/add-experience" className="btn btn-light">
        <i className="fab fa-black-tie text-primary"></i> Add Experience
      </Link>
      <Link to="/add-education" className="btn btn-light">
        <i className="fas fa-graduation-cap text-primary"></i> Add Education
      </Link>
    </div>
  );
}
