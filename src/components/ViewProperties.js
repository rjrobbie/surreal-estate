import React from "react";
import PropertyCard from "./PropertyCard";

const ViewProperties = () => {
  return (
    <div>
      <h1>View Properties</h1>
      <div>
        <PropertyCard
          title="Test Apartment"
          type="Terrace"
          bathrooms={2}
          bedrooms={4}
          price={10000000}
          city="Chicago"
          email="test@test.com"
        />
      </div>
    </div>
  );
};

export default ViewProperties;
