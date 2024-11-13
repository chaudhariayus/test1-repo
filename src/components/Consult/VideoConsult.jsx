// src/components/VideoConsult.js
import React from 'react';
import DoctorList from './DoctorList';

export default function VideoConsult() {
    const doctors = [
        {
            name: 'Dr. Amol Thorat Dinkar',
            experience: 24,
            fee: 300,
            rating: 94,
            slots: ['04:15 PM', '05:00 PM', '06:00 PM']
        },
        {
            name: 'Dr. Sandeep Bhirud',
            experience: 35,
            fee: 500,
            rating: 98,
            slots: ['04:30 PM', '05:15 PM', '06:30 PM']
        },
        // Additional random doctors
        {
            name: 'Dr. Kavita Nair',
            experience: 10,
            fee: 420,
            rating: 89,
            slots: ['03:30 PM', '04:15 PM', '05:45 PM']
        },
        {
            name: 'Dr. Amit Joshi',
            experience: 15,
            fee: 380,
            rating: 92,
            slots: ['02:45 PM', '04:45 PM', '06:00 PM']
        },
        {
            name: 'Dr. Sneha Rao',
            experience: 17,
            fee: 390,
            rating: 87,
            slots: ['03:15 PM', '04:30 PM', '05:30 PM']
        },
    ];

    return (
        <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-xl font-bold mb-4">Video Consult Available Doctors</h3>
            <DoctorList doctors={doctors} />
        </div>
    );
}
