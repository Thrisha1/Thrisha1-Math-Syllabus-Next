import React from 'react';

// importing the necessary components
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Syllabus from '../components/Syllabus';
const HomePage = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <Syllabus />
        </div>
    );
}

export default HomePage;