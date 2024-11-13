import React from 'react';

export default function Specialties() {
  const specialties = [
    { name: 'Dentist', image: 'https://picsum.photos/150/150' },
    { name: 'Gynecologist/Obstetrician', image: 'https://picsum.photos/150/150' },
    { name: 'Dietitian/Nutrition', image: 'https://picsum.photos/150/150' },
    { name: 'Physiotherapist', image: 'https://picsum.photos/150/150' },
  ];

  return (
    <div className="py-10 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold mb-4">Book an appointment for an in-clinic consultation</h2>
        <p className="text-gray-600 mb-8">Find experienced doctors across all specialties</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {specialties.map((specialty, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-lg text-center shadow">
              <img src={specialty.image} alt={specialty.name} className="mx-auto mb-4 rounded-full" />
              <h3 className="font-semibold">{specialty.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
