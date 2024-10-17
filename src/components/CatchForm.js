import React, { useState } from 'react';

const CatchForm = () => {
  const [formData, setFormData] = useState({
    species: '',
    quantity: '',
    location: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
    // Make API call to log catch (in future steps)
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Species:</label>
        <input
          type="text"
          name="species"
          value={formData.species}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Quantity:</label>
        <input
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Log Catch</button>
    </form>
  );
};

export default CatchForm;
