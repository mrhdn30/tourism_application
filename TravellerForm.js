import React from 'react';

function TravellerForm() {
  return (
    <form>
      <h2>Traveller Sign Up</h2>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" />
      </label>
      <br />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default TravellerForm;
