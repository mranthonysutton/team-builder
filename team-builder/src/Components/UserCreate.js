import React, { useState } from "react";

const UserCreate = props => {
  const [personData, setPersonData] = useState({
    fname: "",
    lname: "",
    favFood: "",
    bio: ""
  });

  const submitForm = event => {
    event.preventDefault();
  };

  const changeHandler = event => {
    // deconstructs person data so that the name and the value of the input fields can be obtained
    setPersonData({ ...personData, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="fname">First Name: </label>
      <input
        id="fname"
        name="fname"
        type="text"
        placeholder="First Name"
        onChange={changeHandler}
      />
      <br />
      <label htmlFor="lname">Last Name: </label>
      <input
        id="lname"
        name="lname"
        type="text"
        placeholder="Last Name"
        onChange={changeHandler}
      />
      <br />
      <label htmlFor="favFood">Favorite Food: </label>
      <input
        id="favFood"
        name="favFood"
        type="text"
        placeholder="What is your favorite food?"
        onChange={changeHandler}
      />
      <br />
      <label htmlFor="bio">Bio: </label>
      <textarea
        id="bio"
        name="bio"
        type="text"
        placeholder="About You"
        onChange={changeHandler}
      />
      <br />
      <button type="submit">Add Team Member</button>
    </form>
  );
};

export default UserCreate;
