import React from 'react';

function TravelServiceProviderForm() {
  return (
    <form>
      <h2>Travel Service Provider Sign Up</h2>
      <label>
        Company Name:
        <input type="text" name="companyName" />
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
        Service Type:
        <input type="text" name="serviceType" />
      </label>
      <br />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default TravelServiceProviderForm;
