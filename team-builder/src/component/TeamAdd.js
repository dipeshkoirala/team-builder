import React, { useState } from "react";

const TeamAdd = (props) => {
  const [member, addMember] = useState({
    date: "",
    fullName: "",
    email: "",
    info: "",
  });

  const handleChanges = (event) => {
    addMember({ ...member, [event.target.name]: event.target.value });
    console.log(member);
  };

  return (
    <div className="form-wrapper">
      <h1>This section is for adding Team</h1>;
      <form>
        <label htmlFor="title">
          <strong>Date: </strong>
        </label>
        <input
          className="firstI"
          onChange={handleChanges}
          id="date"
          type="text"
          name="date"
          value={Date()}
        />

        <label>Member Full Name:</label>
        <input
          className="firstI"
          onChange={handleChanges}
          type="text"
          id="fullname"
          name="fullName"
          value="test"
        />

        <label>Email ID:</label>
        <input
          className="firstI"
          onChange={handleChanges}
          type="text"
          id="email"
          name="email"
          value="test"
        />

        <label>Information</label>
        <textarea
          className="firstI"
          onChange={handleChanges}
          id="info"
          name="info"
          value="test"
        />
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
};

export default TeamAdd;
