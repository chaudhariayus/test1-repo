// src/components/AvailableSlots.js
import React from 'react';

export default function AvailableSlots({ slots }) {
    return (
        <div className="mt-2">
            <h4 className="text-sm font-semibold">Available Slots</h4>
            <div className="flex space-x-2 mt-1">
                {slots.map((slot, index) => (
                    <button key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-md">
                        {slot}
                    </button>
                ))}
            </div>
        </div>
    );
}
