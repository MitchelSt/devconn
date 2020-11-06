import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUser } from "../../actions/postActions";
import { useContext } from "react";

import { UserDataContext } from "../../context/userContext";

export default function GetData() {
  const dispatch = useDispatch();
  const userRedux = useSelector((state) => state.post);
  const { isFetching, error, user } = userRedux;

  const { state } = useContext(UserDataContext);
  console.log(1, "strate of userdatacontext", state);

  const [userId, setUserId] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(fetchUser(userId));
    setUserId("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter user"
          onChange={(e) => setUserId(e.target.value)}
        />
        <button type="submit">SUBMIT</button>
      </form>
      {isFetching ? (
        <p>...Loading</p>
      ) : error ? (
        <p>{error.response.data}</p>
      ) : (
        <p>
          {user.results &&
            `This is ${user.results[0].name.first} with ID ${user.results[0].id.value}`}
        </p>
      )}
    </>
  );
}
