// src/components/Consult.js
import React, { useState } from 'react';
import ConsultTypeSwitcher from '../components/Consult/ConsultTypeSwitcher';
import ClinicVisit from '../components/Consult/ClinicVisit';
import VideoConsult from '../components/Consult/VideoConsult';

export default function Consult() {
    const [consultType, setConsultType] = useState('clinic'); // 'clinic' or 'video'

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <ConsultTypeSwitcher consultType={consultType} setConsultType={setConsultType} />
            {consultType === 'clinic' ? <ClinicVisit /> : <VideoConsult />}
        </div>
    );
}
