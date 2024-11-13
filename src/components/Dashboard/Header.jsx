import React from 'react';

export default function Header() {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl font-semibold text-blue-600">Heal Nexus</div>
        <nav className="space-x-4">
          <a href="#" className="text-gray-600 hover:text-blue-600">Find Doctors</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Video Consult</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Surgeries</a>
        </nav>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
         Profile
        </button>
      </div>
    </header>
  );
}
