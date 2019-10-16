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

const EditButton = styled.button`
  width: 50%;
  padding: 2% 0;
  margin: 0 0 3% 0;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid slategray;
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
            <EditButton onClick={() => console.log(index)}>Edit</EditButton>
          </PersonContainer>
        );
      })}
    </TeamMemberContainer>
  );
};

export default TeamMember;
