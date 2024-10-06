import React, { useState } from 'react';

const SustainabilityIncentives = () => {
    // State for green credits
    const [greenCredits, setGreenCredits] = useState(0);

    // Function to earn credits
    const earnCredits = () => {
        setGreenCredits(greenCredits + 10); // Assume earning 10 credits each time
        alert('You have earned 10 green credits!');
    };

    // Function to use credits for energy purchase
    const useCreditsForPurchase = () => {
        if (greenCredits >= 5) {
            setGreenCredits(greenCredits - 5); // Assume each purchase costs 5 credits
            alert('You have used 5 green credits for an energy purchase.');
        } else {
            alert('Not enough green credits to make a purchase.');
        }
    };

    // Function to donate credits
    const donateCredits = () => {
        if (greenCredits >= 10) {
            setGreenCredits(greenCredits - 10); // Assume donation costs 10 credits
            alert('You have donated 10 green credits to environmental causes.');
        } else {
            alert('Not enough green credits to donate.');
        }
    };

    return (
        <div className="bg-[#6EA0B1] p-6 rounded-lg shadow-lg w-full">
            <h2 className="text-2xl text-white font-bold">Sustainability Incentives</h2>
            <p className="text-white mt-4">Earn green credits by storing and generating energy.</p>

            {/* Display green credits */}
            <div className="bg-[#E5690B] mt-6 p-4 rounded-md text-white text-center">
                <h3 className="text-xl font-semibold">Current Green Credits</h3>
                <p className="text-3xl mt-2">{greenCredits}</p>
            </div>

            {/* Earn Credits Button */}
            <button
                onClick={earnCredits}
                className="mt-6 bg-[#264059] text-white py-2 px-4 rounded-md hover:bg-[#1f3c49]"
            >
                Earn Credits
            </button>

            {/* Use Credits for Purchase Button */}
            <button
                onClick={useCreditsForPurchase}
                className="mt-4 bg-[#E5690B] text-white py-2 px-4 rounded-md hover:bg-[#d4570b]"
            >
                Use 5 Credits for Energy Purchase
            </button>

            {/* Donate Credits Button */}
            <button
                onClick={donateCredits}
                className="mt-4 bg-[#264059] text-white py-2 px-4 rounded-md hover:bg-[#1f3c49]"
            >
                Donate 10 Credits to Environmental Causes
            </button>
        </div>
    );
};

export default SustainabilityIncentives;
