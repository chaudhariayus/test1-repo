// src/components/ConsultTypeSwitcher.js
import React from 'react';

export default function ConsultTypeSwitcher({ consultType, setConsultType }) {
    return (
        <div className="flex space-x-4 mb-6">
            <button
                onClick={() => setConsultType('clinic')}
                className={`px-4 py-2 rounded-md ${consultType === 'clinic' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 border'}`}
            >
                Clinic Visit
            </button>
            <button
                onClick={() => setConsultType('video')}
                className={`px-4 py-2 rounded-md ${consultType === 'video' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 border'}`}
            >
                Video Consult
            </button>
        </div>
    );
}
