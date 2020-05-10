import React, { useState } from "react";
// import logo from "./logo.svg";
import Team from "./component/team";
import "./App.css";

function App() {
  //

  const [team, setTeam] = useState([
    {
      id: "",
      date: "",
      fullName: "",
      email: "",
      info: " ",
    },
  ]);

  const addNewTeam = (member) => {
    const newTeam = {
      id: team.length + 1,
      date: member.date,
      fullName: member.fullName,
      email: member.email,
      info: member.info,
    };
    setTeam([...team, newTeam]);
  };

  return (
    <div className="App">
      <h1>Team Build</h1>
      <Team team={team} />
    </div>
  );
}

export default App;
