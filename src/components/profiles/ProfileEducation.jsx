import React from "react";
import Moment from "react-moment";
import moment from "moment";

export default function ProfileEducation({
  education: { school, degree, fieldofstudy, to, from, description },
}) {
  return (
    <div>
      <h3 className="text-dark">{school}</h3>
      <p>
        <Moment format="YYYY/MM/DD">{moment.utc(from)}</Moment> -{" "}
        {!to ? " Now" : <Moment format="YYYY/MM/DD">{moment.utc(to)}</Moment>}
      </p>
      <p>
        <strong>Degree: </strong> {degree}
      </p>
      <p>
        <strong>Field Of Study: </strong> {fieldofstudy}
      </p>
      <p>
        <strong>Description: </strong> {description}
      </p>
    </div>
  );
}
