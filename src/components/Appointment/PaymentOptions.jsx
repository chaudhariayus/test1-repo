// src/components/PaymentOptions.js
import React from 'react';

export default function PaymentOptions() {
    return (
        <div className="mb-4">
            <h4 className="text-lg font-bold mb-2">Choose a payment option to Book Appointment</h4>
            <div className="flex items-center mb-2">
                <input type="radio" id="payOnline" name="payment" />
                <label htmlFor="payOnline" className="ml-2">₹300 Pay Online</label>
            </div>
            <div className="flex items-center mb-2">
                <input type="radio" id="payAtClinic" name="payment" defaultChecked />
                <label htmlFor="payAtClinic" className="ml-2">₹300 Pay later at the clinic</label>
            </div>
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold mt-4">
                Confirm Clinic Visit
            </button>
        </div>
    );
}
