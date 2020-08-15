import React from "react";
import Moment from "react-moment";
import moment from "moment";

export default function ProfileExperience({
  experience: { company, title, location, current, to, from, description },
}) {
  return (
    <div>
      <h3 className="text-dark">{company}</h3>
      <p>
        <Moment format="YYYY/MM/DD">{moment.utc(from)}</Moment> -{" "}
        {!to ? " Now" : <Moment format="YYYY/MM/DD">{moment.utc(to)}</Moment>}
      </p>
      <p>
        <strong>Position: </strong> {title}
      </p>
      <p>
        <strong>Location: </strong> {location}
      </p>
      <p>
        <strong>Description: </strong> {description}
      </p>
    </div>
  );
}
