import React from 'react';

export function ForgetPassword() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-pink-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">Heal Nexus</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Reset your password</h2>
          <p className="text-gray-600 mb-6">
            Enter your email and we'll send you a link to reset your password.
          </p>
        </div>
        
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Enter your email"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Reset your password
          </button>
        </form>
      </div>
    </div>
  );
}

