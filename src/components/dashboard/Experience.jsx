import React from "react";
import Moment from "react-moment";
import moment from "moment";
import { deleteExperience } from "../../actions/profileActions";
import { useSelector } from "react-redux";

export default function Experience() {
  const profile = useSelector((state) => state.profile.profile);

  let experiences;
  if (profile !== null) {
    experiences = profile.experience.map((exp) => (
      <tr key={exp._id}>
        <td>{exp.company}</td>
        <td className="hide-sm">{exp.title}</td>
        <td>
          <Moment format="YYYY/MM/DD">{moment.utc(exp.from)}</Moment> -{" "}
          {exp.to === null ? (
            " Now"
          ) : (
            <Moment format="YYYY/MM/DD">{moment.utc(exp.to)}</Moment>
          )}
        </td>
        <td>
          <button
            onClick={deleteExperience(exp._id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    ));
  }

  return experiences && experiences.length !== 0 ? (
    <>
      <h2 className="my-2">Experience Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th className="hide-sm">Title</th>
            <th className="hide-sm">Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{experiences && experiences}</tbody>
      </table>
    </>
  ) : null;
}
