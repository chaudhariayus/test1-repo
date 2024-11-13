// src/components/AppointmentHeader.js
import React from 'react';

export default function AppointmentHeader({ type }) {
    return (
        <div className="mb-4">
            <h2 className="text-xl font-bold">
                {type === 'clinic' ? 'In-clinic Appointment' : 'Video Consult'}
            </h2>
            <div className="flex items-center text-gray-600 text-sm mt-2">
                <p>On Nov 06, 2024</p>
                <span className="mx-2">•</span>
                <p>At 5:30 PM</p>
                <a href="#" className="ml-4 text-blue-500">Change Date & Time</a>
            </div>
        </div>
    );
}
