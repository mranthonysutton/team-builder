import React, { useState } from "react";

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
    <form onSubmit={submitForm}>
      <label htmlFor="fullName">Full Name: </label>
      <input
        id="fullName"
        name="fullName"
        type="text"
        placeholder="Full Name"
        onChange={changeHandler}
        value={personData.fullName}
      />
      <br />
      <label htmlFor="email">Email: </label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="email@email.com"
        onChange={changeHandler}
        value={personData.email}
      />
      <br />
      <label htmlFor="role">
        Role:
        <input
          id="role"
          name="role"
          type="text"
          placeholder="What is your role?"
          onChange={changeHandler}
          value={personData.role}
        />
      </label>
      <br />
      <button type="submit">Add Team Member</button>
    </form>
  );
};

export default Form;
