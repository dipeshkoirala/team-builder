import React from "react";

const Team = (props) => {
  return (
    <div className="team-info">
      {props.team.map((a) => (
        <div className="tm" key={a.id}>
          <h2>Name: {a.fullName}</h2>
          <p>Email: {a.email}</p>
          <p>AboutMe: {a.info}</p>
          <p>Date: {a.date}</p>
          {console.log(a.date)}
        </div>
      ))}
    </div>
  );
};

export default Team;
