import React, { useState } from "react";
import "./App.css";
import TeamMember from "./Components/TeamMember";
import Form from "./Components/Form";
import data from "./data";

function App() {
  const [teamMembers, setTeamMembers] = useState(data);

  // Adds the single person from a copy of information found in the teammembers
  const addTeamMember = person => {
    setTeamMembers([...teamMembers, person]);
  };

  return (
    <div className="App">
      <h1>Team Builder</h1>
      <Form addTeamMember={addTeamMember} />
      {/* renderTeam is being created in TeamMember.js */}
      <TeamMember renderTeam={teamMembers} />
    </div>
  );
}

export default App;
