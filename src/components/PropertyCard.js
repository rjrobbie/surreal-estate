import React from "react";

const PropertyCard = ({
  title,
  type,
  bathrooms,
  bedrooms,
  price,
  city,
  email,
}) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>Type: {type}</p>
      <p>Bathrooms: {bathrooms}</p>
      <p>Bedrooms: {bedrooms}</p>
      <p>Price: {price}</p>
      <p>City: {city}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default PropertyCard;
