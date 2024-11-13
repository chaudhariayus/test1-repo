// src/components/PatientDetails.js
import React from 'react';

export default function PatientDetails() {
    return (
        <div className="mb-4">
            <h4 className="text-lg font-bold mb-2">Patient Details</h4>
            <div className="flex items-center mb-4">
                <input type="radio" id="patient1" name="patient" defaultChecked />
                <label htmlFor="patient1" className="ml-2 text-gray-600">Ayush Chaudhari</label>
                <input type="radio" id="patient2" name="patient" className="ml-6" />
                <label htmlFor="patient2" className="ml-2 text-gray-600">Someone Else</label>
            </div>
            <form className="space-y-4">
                <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full p-2 border rounded-lg"
                    defaultValue="Ayush Chaudhari"
                />
                <input
                    type="tel"
                    placeholder="Mobile"
                    className="w-full p-2 border rounded-lg"
                    defaultValue="+919724721703"
                />
                <input
                    type="email"
                    placeholder="Your Email (Optional)"
                    className="w-full p-2 border rounded-lg"
                />
                <div className="flex items-center">
                    <input type="checkbox" id="whatsapp" defaultChecked />
                    <label htmlFor="whatsapp" className="ml-2 text-gray-600">
                        Get updates on WhatsApp number +919724721703
                    </label>
                </div>
            </form>
        </div>
    );
}
