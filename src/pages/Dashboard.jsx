import React from 'react';
import Header from '../components/Dashboard/Header';
import HeroSection from '../components/Dashboard/HeroSection';
import Services from '../components/Dashboard/Services';
import Specialities from '../components/Dashboard/Specialities'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <HeroSection />
      <Services />
      <Specialities />
    </div>
  );
}
