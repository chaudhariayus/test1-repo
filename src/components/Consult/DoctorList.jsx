// src/components/DoctorList.js
import React from 'react';
import AvailableSlots from './AvailableSlots';

export default function DoctorList({ doctors }) {
    return (
        <div>
            {doctors.map((doctor, index) => (
                <div key={index} className="flex items-start border-b py-4">
                    <div className="mr-4">
                        <div className="bg-gray-300 rounded-full h-16 w-16"></div> {/* Placeholder for doctor image */}
                    </div>
                    <div className="flex-1">
                        <h4 className="font-semibold">{doctor.name}</h4>
                        <p className="text-sm text-gray-600">{doctor.experience} years experience</p>
                        <p className="text-sm text-gray-600">₹{doctor.fee} Consultation fee</p>
                        <p className="text-sm text-green-600">{doctor.rating}% Patient Satisfaction</p>
                        <AvailableSlots slots={doctor.slots} />
                    </div>
                </div>
            ))}
        </div>
    );
}
