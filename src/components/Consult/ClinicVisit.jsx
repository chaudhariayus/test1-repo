// src/components/ClinicVisit.js
import React from 'react';
import DoctorList from './DoctorList';

export default function ClinicVisit() {
    const doctors = [
        {
            name: 'Dr. Amol Thorat Dinkar',
            experience: 24,
            fee: 300,
            rating: 94,
            slots: ['04:15 PM', '04:30 PM', '06:00 PM']
        },
        {
            name: 'Dr. Sandeep Bhirud',
            experience: 35,
            fee: 500,
            rating: 98,
            slots: ['04:45 PM', '05:15 PM', '06:00 PM']
        },
        // Additional random doctors
        {
            name: 'Dr. Priya Mehta',
            experience: 12,
            fee: 400,
            rating: 90,
            slots: ['03:00 PM', '04:00 PM', '05:00 PM']
        },
        {
            name: 'Dr. Rajesh Kumar',
            experience: 18,
            fee: 350,
            rating: 88,
            slots: ['03:30 PM', '04:45 PM', '06:15 PM']
        },
        {
            name: 'Dr. Anjali Gupta',
            experience: 20,
            fee: 450,
            rating: 95,
            slots: ['02:15 PM', '03:45 PM', '05:30 PM']
        },
    ];

    return (
        <div className="bg-white rounded-lg shadow p-4">
            <DoctorList doctors={doctors} />
        </div>
    );
}
