import React from "react";
import { useParams } from "react-router-dom";
import AdminProfile from "../components/Profile/AdminProfile";
import PatientProfile from "../components/Profile/PatientProfile";
import DoctorProfile from "../components/Profile/DoctorProfile";
import PharmacistProfile from "../components/Profile/PharmacistProfile";
import LabTechnicianProfile from "../components/Profile/LabTechnicianProfile";

export function ProfileCard() {
    const { role } = useParams();
    const Role = role.charAt(0).toUpperCase() + role.slice(1);

    return (
        <div className="bg-white min-h-screen p-6 flex flex-col items-center">
            <h1 className="text-4xl font-bold mb-6">{`${Role} Profile`}</h1>
            <div className="w-full max-w-md">
                {/* Conditionally rendered content based on role */}
                {role === "admin" ? (
                    <AdminProfile />
                ) : role === "patient" ? (
                    <PatientProfile />
                ) : role === "doctor" ? (
                    <DoctorProfile />
                ) : role === "pharmacist" ? (
                    <PharmacistProfile />
                ) : role === "lab-technician" ? (
                    <LabTechnicianProfile />
                ) : (
                    <p className="text-red-500">Please select a valid role.</p>
                )}
            </div>
        </div>
    );
}
