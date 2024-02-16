// ReverseGeocoding.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface GeoResponse {
  Feature: {
    Property: {
      Address: string;
    };
  }[];
}

const ReverseGeocoding: React.FC = () => {
  const [address, setAddress] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<GeoResponse>(
          `http://localhost:3000/reverse-geocode?lat=35.681236&lon=139.767125`
        );
        setAddress(response.data.Feature[0].Property.Address);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <p>Address: {address}</p>
    </div>
  );
};

export default ReverseGeocoding;
