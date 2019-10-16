import React from "react";

const UserCreate = props => {
  return (
    <form>
      <label htmlFor="fname">First Name: </label>
      <input id="fname" name="fname" type="text" placeholder="First Name" />
      <br />
      <label htmlFor="lname">Last Name: </label>
      <input id="lname" name="lname" type="text" placeholder="Last Name" />
      <br />
      <label htmlFor="favFood">Favorite Food: </label>
      <input
        id="favFood"
        name="favFood"
        type="text"
        placeholder="What is your favorite food?"
      />
      <br />
      <label htmlFor="bio">Bio: </label>
      <textarea id="bio" name="bio" type="text" placeholder="About You" />
      <br />
      <button type="submit" value="Add Team Member">
        Add Team Member
      </button>
    </form>
  );
};

export default UserCreate;
