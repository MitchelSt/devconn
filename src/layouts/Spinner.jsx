import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Spinner() {
  return (
    <CircularProgress
      color="grey"
      style={{ position: "absolute", left: "50%", top: "20%" }}
    />
  );
}
