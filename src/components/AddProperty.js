import React, { useState } from "react";
import "../styles/add-property.css";
import { eventWrapper } from "@testing-library/user-event/dist/utils";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      type: "Flat",
      bedrooms: "",
      bathrooms: "",
      price: "",
      email: "",
    },
  };

  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFields((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="add-property">
      <form onSubmit={handleAddProperty}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={fields.title}
          onChange={handleFieldChange}
          placeholder="Name of property"
        />

        <label htmlFor="city">City:</label>
        <select id="city" name="city" value={fields.city} onChange={handleFieldChange}>
          <option value="Manchester">Manchester</option>
          <option value="London">London</option>
          <option value="Liverpool">Liverpool</option>
          <option value="Birmingham">Birmingham</option>
        </select>

        <label htmlFor="type">Type:</label>
        <select id="type" name="type" value={fields.type} onChange={handleFieldChange}>
          <option value="Flat">Flat</option>
          <option value="Detached">Detached</option>
          <option value="Semi-Detached">Semi-Detached</option>
          <option value="Terraced">Terraced</option>
          <option value="End of Terrace">End of Terrace</option>
          <option value="Cottage">Cottage</option>
          <option value="Bungalow">Bungalow</option>
        </select>

        <label htmlFor="bedrooms">Bedrooms:</label>
        <input
          type="number"
          id="bedrooms"
          name="bedrooms"
          value={fields.bedrooms}
          onChange={handleFieldChange}
          placeholder="Number of bedrooms"
        />

        <label htmlFor="bathrooms">Bathrooms:</label>
        <input
          type="number"
          id="bathrooms"
          name="bathrooms"
          value={fields.bathrooms}
          onChange={handleFieldChange}
          placeholder="Number of bathrooms"
        />

        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={fields.price}
          onChange={handleFieldChange}
          placeholder="Value in GBP (£)"
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={fields.email}
          onChange={handleFieldChange}
          placeholder="john.smith@email.co.uk"
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProperty;