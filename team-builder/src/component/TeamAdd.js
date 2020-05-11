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

  const submitForm = (event) => {
    event.preventDefault();
    props.addNewTeam(member);
    addMember({ fullName: "", email: "", info: "" });
  };

  return (
    <div className="form-wrapper">
      <h1>This section is for adding Team</h1>;
      <form className="first" onSubmit={submitForm}>
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
          value={member.fullName}
        />

        <label>Email ID:</label>
        <input
          className="firstI"
          onChange={handleChanges}
          type="text"
          id="email"
          name="email"
          value={member.email}
        />

        <label>Information</label>
        <textarea
          className="firstI"
          onChange={handleChanges}
          id="info"
          name="info"
          value={member.info}
        />
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
};

export default TeamAdd;
