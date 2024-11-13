// src/components/TermsAndConditions.js
import React from 'react';

export default function TermsAndConditions() {
    return (
        <div className="text-gray-500 text-sm mt-4">
            <p>
                Updates will be sent to +919724721703
            </p>
            <p className="mt-2">
                By booking this appointment, you agree to Practo’s{' '}
                <a href="#" className="text-blue-500">Terms and Conditions</a>.
            </p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
                <li>No more billing queues, go cashless!</li>
                <li>Instant appointment confirmation</li>
                <li>Easy appointment management</li>
                <li>Appointment assured by Prime clinics</li>
            </ul>
        </div>
    );
}
