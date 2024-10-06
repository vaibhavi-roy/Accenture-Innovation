import React, { useState, useEffect } from 'react';

const EnergyTrading = () => {
    // State for available energy and trade suggestions
    const [availableEnergy, setAvailableEnergy] = useState(100); // in kWh
    const [aiSuggestion, setAiSuggestion] = useState('');

    // Simulated AI suggestion
    useEffect(() => {
        const fetchAISuggestion = async () => {
            // Simulate an AI algorithm suggesting a trade
            const suggestions = [
                'Trade 20 kWh to Microgrid A for $5.00',
                'Trade 15 kWh to External Buyer B for $4.50',
                'Hold your energy for better prices later.',
            ];
            // Simulate fetching a suggestion
            setAiSuggestion(suggestions[Math.floor(Math.random() * suggestions.length)]);
        };

        fetchAISuggestion();
    }, []);

    // Simulate a trade action
    const handleTrade = () => {
        if (availableEnergy > 0) {
            alert(`Successfully traded ${availableEnergy} kWh!`);
            setAvailableEnergy(0); // Reset available energy after trading
        } else {
            alert('No energy available for trading.');
        }
    };

    return (
        <div className="bg-[#6EA0B1] p-6 rounded-lg shadow-lg w-full">
            <h2 className="text-2xl text-white font-bold">Energy Trading</h2>
            <p className="text-white mt-4">Trade energy with local microgrids or external buyers.</p>

            {/* Display available energy for trading */}
            <div className="bg-[#E5690B] mt-6 p-4 rounded-md text-white text-center">
                <h3 className="text-xl font-semibold">Available Energy for Trading</h3>
                <p className="text-3xl mt-2">{availableEnergy} kWh</p>
            </div>

            {/* AI Suggestions */}
            <div className="mt-6 bg-white p-4 rounded-md">
                <h3 className="text-xl font-semibold">AI Trading Suggestion</h3>
                <p className="text-gray-700 mt-2">{aiSuggestion}</p>
            </div>

            {/* Trade Button */}
            <button
                onClick={handleTrade}
                className="mt-6 bg-[#264059] text-white py-2 px-4 rounded-md hover:bg-[#1f3c49]"
            >
                Execute Trade
            </button>
        </div>
    );
};

export default EnergyTrading;
