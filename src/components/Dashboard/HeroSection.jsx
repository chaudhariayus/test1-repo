import React from 'react';
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <div className="bg-white py-10">
      <div className="container mx-auto text-center">
        
        {/* Location and Search Inputs */}
        <div className="flex justify-center items-center border border-gray-300 rounded-lg overflow-hidden w-2/3 md:w-1/2 mx-auto">
          {/* Location Input */}
          <div className="flex items-center px-4 py-2 bg-white border-r border-gray-300">
            <FaMapMarkerAlt className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Enter Location"
              className="outline-none"
              style={{ minWidth: "60px" }}
            />
          </div>

          {/* Search Input */}
          <div className="flex items-center px-4 py-2 w-full">
            <FaSearch className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search doctors, clinics, hospitals, etc."
              className="w-full outline-none"
            />
          </div>
        </div>

        {/* Service Options */}
        <div className="flex justify-around mt-10">
          <div className="p-4 text-center">
            <img src="https://picsum.photos/100/100" alt="Video Consultation" className="mx-auto mb-4 rounded-full" />
            <h3 className="font-semibold">Instant Video Consultation</h3>
            <p className="text-sm text-gray-600">Connect within 60 secs</p>
          </div>
          <div className="p-4 text-center">
            <img src="https://picsum.photos/100/100" alt="Find Doctors" className="mx-auto mb-4 rounded-full" />
            <h3 className="font-semibold">Find Doctors Near You</h3>
            <p className="text-sm text-gray-600">Confirmed appointments</p>
          </div>
          <div className="p-4 text-center">
            <img src="https://picsum.photos/100/100" alt="Surgeries" className="mx-auto mb-4 rounded-full" />
            <h3 className="font-semibold">Surgeries</h3>
            <p className="text-sm text-gray-600">Safe and trusted surgery centers</p>
          </div>
        </div>
      </div>
    </div>
  );
}
