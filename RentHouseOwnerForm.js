import React from 'react';

function RentHouseOwnerForm() {
  return (
    <form>
      <h2>Rent House Owner Sign Up</h2>
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
      <label>
        Property Name:
        <input type="text" name="propertyName" />
      </label>
      <br />
      <label>
        Location:
        <input type="text" name="location" />
      </label>
      <br />
      <label>
        Number of Rooms:
        <input type="number" name="numberOfRooms" />
      </label>
      <br />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default RentHouseOwnerForm;
