import React from 'react';

export default function Services() {
  const services = [
    { name: 'Period doubts or Pregnancy', action: 'CONSULT NOW' },
    { name: 'Acne, pimple or skin issues', action: 'CONSULT NOW' },
    { name: 'Performance issues in bed', action: 'CONSULT NOW' },
    { name: 'Cold, cough or fever', action: 'CONSULT NOW' },
    { name: 'Child not feeling well', action: 'CONSULT NOW' },
    { name: 'Depression or anxiety', action: 'CONSULT NOW' },
  ];

  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold mb-4">Consult top doctors online for any health concern</h2>
        <p className="text-gray-600 mb-8">Private online consultations with verified doctors in all specialties</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div key={index} className="p-4 bg-white rounded-lg shadow text-center">
              <h3 className="font-semibold">{service.name}</h3>
              <button className="mt-2 text-blue-600 hover:underline">{service.action}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
