import React, { useState } from 'react';
import './App.css';
import TravellerForm from './component/signup/TravellerForm'
import TravelServiceProviderForm from './component/signup/TravelServiceProviderForm';
import RentHouseOwnerForm from './component/signup/RentHouseOwnerForm';

function App() {
  const [userCategory, setUserCategory] = useState('');

  const handleCategoryChange = (event) => {
    setUserCategory(event.target.value);
  };

  const renderForm = () => {
    switch (userCategory) {
      case 'traveller':
        return <TravellerForm />;
      case 'serviceProvider':
        return <TravelServiceProviderForm />;
      case 'rentHouseOwner':
        return <RentHouseOwnerForm />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <label>
        Who are you?
        <select value={userCategory} onChange={handleCategoryChange}>
          <option value="">Select your category</option>
          <option value="traveller">Traveller</option>
          <option value="serviceProvider">Travel Service Provider</option>
          <option value="rentHouseOwner">Rent House Owner</option>
        </select>
      </label>
      {renderForm()}
    </div>
  );
}

export default App;
