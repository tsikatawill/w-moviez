import React from "react";

const Spinner = () => {
  return (
    <div
      className="spinner-wrapper py-5 my-5"
      style={{ display: "grid", placeItems: "center" }}
    >
      <div className="spinner-border" role="status">
        <span className="sr-only"></span>
      </div>
    </div>
  );
};

export default Spinner;
