// src/components/DoctorInfo.js
import React from 'react';

export default function DoctorInfo({ type }) {
    return (
        <div className="flex items-start mb-4">
            <img
                src="https://via.placeholder.com/80"
                alt="Doctor"
                className="rounded-full w-16 h-16 mr-4"
            />
            <div>
                <h3 className="text-lg font-bold">Dr. Amol Thorat Dinkar</h3>
                <p className="text-gray-600">BDS, Implantologist, Dentist, Dental Surgeon</p>
                <p className="text-gray-600 mt-2">
                    {type === 'clinic' ? 'Dr. Ratnika\'s - Smile Up Dental Clinic & Implant Center' : 'Video Consultation'}
                </p>
                {type === 'clinic' && (
                    <p className="text-sm text-blue-500">
                        Upper Ground Floor, Shop 109, Gera Park View Plaza, Pune
                    </p>
                )}
            </div>
        </div>
    );
}
