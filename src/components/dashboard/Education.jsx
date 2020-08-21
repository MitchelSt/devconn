import React from "react";
import Moment from "react-moment";
import moment from "moment";
import { deleteEducation } from "../../actions/profileActions";
import { useSelector, useDispatch } from "react-redux";

export default function Education() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile.profile);

  let educations;
  if (profile !== null && profile.education) {
    educations = profile.education.map((edu) => (
      <tr key={edu._id}>
        <td>{edu.school}</td>
        <td className="hide-sm">{edu.degree}</td>
        <td>
          <Moment format="YYYY/MM/DD">{moment.utc(edu.from)}</Moment> -{" "}
          {edu.to === null ? (
            " Now"
          ) : (
            <Moment format="YYYY/MM/DD">{moment.utc(edu.to)}</Moment>
          )}
        </td>
        <td>
          <button
            onClick={() => dispatch(deleteEducation(edu._id))}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    ));
  } else {
    educations = null;
  }

  return (
    educations &&
    educations.length !== 0 && (
      <>
        <h2 className="my-2">Education Credentials</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Company</th>
              <th className="hide-sm">Title</th>
              <th className="hide-sm">Years</th>
              <th />
            </tr>
          </thead>
          <tbody>{educations}</tbody>
        </table>
      </>
    )
  );
}
