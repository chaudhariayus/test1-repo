// src/components/Appointment.js
import React from 'react';
import AppointmentHeader from '../components/Appointment/AppointmentHeader';
import DoctorInfo from '../components/Appointment/DoctorInfo';
import PatientDetails from '../components/Appointment/PatientDetails';
import PaymentOptions from '../components/Appointment/PaymentOptions';
import TermsAndConditions from '../components/Appointment/TermsAndConditions';

export default function Appointment({ type }) {
    return (
        <div className="p-6 bg-gray-100 min-h-screen flex justify-center">
            <div className="bg-white rounded-lg shadow p-6 w-full max-w-2xl">
                <AppointmentHeader type={type} />
                <DoctorInfo type={type} />
                <PatientDetails />
                <PaymentOptions />
                <TermsAndConditions />
            </div>
        </div>
    );
}
