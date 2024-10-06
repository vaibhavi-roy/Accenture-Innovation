import React, { useState, useEffect } from 'react';

const EnergyUsageOptimization = () => {
    // State for current energy usage and suggestions
    const [currentUsage, setCurrentUsage] = useState(150); // in kWh
    const [aiSuggestions, setAiSuggestions] = useState([]);
    const [maintenanceAlert, setMaintenanceAlert] = useState('');

    // Simulated AI suggestions and maintenance alerts
    useEffect(() => {
        const fetchAISuggestions = async () => {
            const suggestions = [
                'Reduce usage during peak hours for cost savings.',
                'Consider upgrading to energy-efficient appliances.',
                'Install smart thermostats to better control heating and cooling.',
            ];
            const alerts = [
                'Air conditioning unit is due for maintenance.',
                'Replace the furnace filter to improve efficiency.',
                'Check for leaks in your insulation.',
            ];

            // Simulate fetching suggestions
            setAiSuggestions(suggestions);
            setMaintenanceAlert(alerts[Math.floor(Math.random() * alerts.length)]);
        };

        fetchAISuggestions();
    }, []);

    return (
        <div className="bg-[#6EA0B1] p-6 rounded-lg shadow-lg w-full">
            <h2 className="text-2xl text-white font-bold">Energy Usage Optimization</h2>
            <p className="text-white mt-4">AI-driven suggestions for optimizing your energy usage.</p>

            {/* Display current energy usage */}
            <div className="bg-[#E5690B] mt-6 p-4 rounded-md text-white text-center">
                <h3 className="text-xl font-semibold">Current Energy Usage</h3>
                <p className="text-3xl mt-2">{currentUsage} kWh</p>
            </div>

            {/* AI Suggestions */}
            <div className="mt-6 bg-white p-4 rounded-md">
                <h3 className="text-xl font-semibold">AI Suggestions</h3>
                <ul className="list-disc pl-5 text-gray-700 mt-2">
                    {aiSuggestions.map((suggestion, index) => (
                        <li key={index} className="mt-1">{suggestion}</li>
                    ))}
                </ul>
            </div>

            {/* Predictive Maintenance Alert */}
            <div className="mt-6 bg-[#9F5D35] p-4 rounded-md text-white">
                <h3 className="text-xl font-semibold">Predictive Maintenance Alert</h3>
                <p className="mt-2">{maintenanceAlert}</p>
            </div>
        </div>
    );
};

export default EnergyUsageOptimization;
