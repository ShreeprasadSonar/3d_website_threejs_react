import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({text, link, btnText}) => (
    <div className='info-box neo-brutalism-purple'>
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain"/>
        </Link>
    </div>
)

const TrackPackage = () => {
    const [trackingNumber, setTrackingNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.href = `/track`;
    };

    return (
        <div className='info-box neo-brutalism-purple'>
            <p className="font-medium sm:text-xl text-center">Please enter your tracking number below to track your shipment</p>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={trackingNumber} 
                    onChange={(e) => setTrackingNumber(e.target.value)} 
                    placeholder="Enter Tracking Number" 
                    className="tracking-input"
                />
                <button type="submit" className='neo-brutalism-white neo-btn'>
                    Track
                    <img src={arrow} className="w-4 h-4 object-contain"/>
                </button>
            </form>
        </div>
    );
};

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-purple py-4 px-8 text-white mx-5'>
            Hi, I am <a href="https://shreeprasadsonar.web.app/" class="font-semibold" style={{textDecoration: 'underline'}}>Shreeprasad Sonar</a>👋
            <br/>
            MSCS Grad Student at <span className='font-semibold'>UTD</span> 📚
            <br/>
            Advance Intern at <span className='font-semibold'>FedEx Services</span> 📦
            <br/>
            This is a concept website I made to learn <span className='font-semibold'>Three.js</span>
            <br />
            <br />
            Navigate this site like a boss with your mouse or unleash your inner package tracker ninja with keyboard arrows! 🐱‍👤
            <br />
            On mobile? Swipe sideways and let the tracking fun roll!
        </h1>
    ),
    2: (
        <InfoBox 
            text="Like a FedEx package, I've traveled through various companies, collecting skills along the way. Consider me your multi-skilled delivery guy, with a resume stacked fuller than a FedEx truck! 📦✨" 
            link="/about"
            btnText="Learn More About Me 🚀"
        />
    ),
    3: ( 
        <InfoBox 
            text="Projects? Been there, coded that. Curious about the tech?" 
            link="https://github.com/ShreeprasadSonar"
            btnText="Let's unpack! 📦"
        />
    ),
    4: (
        <TrackPackage />
    ),
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo