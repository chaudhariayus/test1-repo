import React from 'react';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white shadow-md p-6 rounded-lg text-center">
      <div className="text-green-500 text-3xl mb-4">{icon}</div>
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default ServiceCard;
