import React from "react";

const TeamMember = props => {
  console.log(props);
  return (
    <div className="team-member-container">
      {/* The props.renderTeam is being passed in from App.js */}
      {props.renderTeam.map((person, index) => {
        return (
          <div className="team-member" key={index}>
            <h2>{person.fullName}</h2>
            <p>{person.email}</p>
            <p>{person.role}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TeamMember;
