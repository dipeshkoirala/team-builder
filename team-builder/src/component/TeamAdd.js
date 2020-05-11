import React from "react";
//import "../../src/index.css";
const TeamAdd = (props) => {
  return (
    <div className="form-wrapper">
      <h1>This section is for adding Team</h1>;
      <form>
        <label htmlFor="title">
          <strong>Date: </strong>
        </label>
        <input
          className="firstI"
          id="date"
          type="text"
          name="date"
          value={Date()}
        />

        <label>Member Full Name:</label>
        <input
          className="firstI"
          type="text"
          id="fullname"
          name="fullName"
          value="test"
        />

        <label>Email ID:</label>
        <input
          className="firstI"
          type="text"
          id="email"
          name="email"
          value="test"
        />

        <label>Information</label>
        <textarea className="firstI" id="info" name="info" value="test" />
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
};

export default TeamAdd;
