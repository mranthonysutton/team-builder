import React from "react";
import styled from "styled-components";

const TeamMemberContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

const PersonContainer = styled.div`
  border: 1px solid #ccc;
  box-shadow: 1px 2px 5px #000;
  width: 30%;
  margin: 1.5% 0;
`;

const TeamMember = props => {
  console.log(props);
  return (
    <TeamMemberContainer>
      {/* The props.renderTeam is being passed in from App.js */}
      {props.renderTeam.map((person, index) => {
        return (
          <PersonContainer key={index}>
            <h2>{person.fullName}</h2>
            <p>{person.email}</p>
            <p>{person.role}</p>
          </PersonContainer>
        );
      })}
    </TeamMemberContainer>
  );
};

export default TeamMember;
