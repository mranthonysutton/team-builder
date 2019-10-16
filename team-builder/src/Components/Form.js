import React, { useState } from "react";
import styled from "styled-components";

const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const FormInput = styled.input`
  margin: 2% 0;
  padding: 10px 5px;
  font-size: 1.2rem;
  border: 1px solid #000;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2% 0;
`;

const FormButton = styled.button`
  width: 60%;
  padding: 3%;
  border-radius: 10px;
  border: 1px solid #ccc;
  font-size: 1.2rem;
  cursor: pointer;
`;

const StyledHeader = styled.h1`
  font-size: 6rem;
  padding: 2% 0;
  margin: 0px;
  text-decoration: underline;
`;

const Form = props => {
  const [personData, setPersonData] = useState({
    fullName: "",
    email: "",
    role: ""
  });

  // addTeamMember is passed in from the App.js
  const submitForm = event => {
    event.preventDefault();
    props.addTeamMember(personData);
    setPersonData({ fullName: "", email: "", role: "" });
  };

  const changeHandler = event => {
    // deconstructs person data so that the name and the value of the input fields can be obtained
    setPersonData({ ...personData, [event.target.name]: event.target.value });
  };

  return (
    <TeamContainer>
      <StyledHeader>Team Builder</StyledHeader>
      <FormContainer>
        <StyledForm onSubmit={submitForm}>
          <label htmlFor="fullName">Full Name: </label>
          <FormInput
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Full Name"
            onChange={changeHandler}
            value={personData.fullName}
          />
          <br />
          <label htmlFor="email">Email: </label>
          <FormInput
            id="email"
            name="email"
            type="email"
            placeholder="email@email.com"
            onChange={changeHandler}
            value={personData.email}
          />
          <br />
          <label htmlFor="role">Role:</label>
          <FormInput
            id="role"
            name="role"
            type="text"
            placeholder="What is your role?"
            onChange={changeHandler}
            value={personData.role}
          />

          <br />
          <ButtonContainer>
            <FormButton type="submit">Add Team Member</FormButton>
          </ButtonContainer>
        </StyledForm>
      </FormContainer>
    </TeamContainer>
  );
};

export default Form;
