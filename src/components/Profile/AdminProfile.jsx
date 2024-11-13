import React from "react";

export default function AdminProfile() {
    return (
        <form className="bg-blue-100 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Admin Profile</h2>
            <input className="w-full p-2 mb-3 border border-gray-300 rounded-lg" placeholder="First Name" />
            <input className="w-full p-2 mb-3 border border-gray-300 rounded-lg" placeholder="Last Name" />
            <input className="w-full p-2 mb-3 border border-gray-300 rounded-lg" placeholder="Email" />
            <input className="w-full p-2 mb-3 border border-gray-300 rounded-lg" placeholder="Permissions" />
            <input className="w-full p-2 mb-3 border border-gray-300 rounded-lg" placeholder="Street Address" />
            <input className="w-full p-2 mb-3 border border-gray-300 rounded-lg" placeholder="City" />
            <input className="w-full p-2 mb-3 border border-gray-300 rounded-lg" placeholder="State" />
            <input className="w-full p-2 mb-3 border border-gray-300 rounded-lg" placeholder="Postal Code" />
            <input className="w-full p-2 mb-3 border border-gray-300 rounded-lg" placeholder="Country" />
            <button type="submit" className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 w-full mt-4">
                Save
            </button>
        </form>
    );
}
