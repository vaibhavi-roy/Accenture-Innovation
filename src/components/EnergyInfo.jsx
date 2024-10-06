import React, { useState, useEffect } from 'react';

const EnergyInfo = () => {
    const [energyProduction, setEnergyProduction] = useState(0);
    const [peakDemand, setPeakDemand] = useState(false);
    const [energyAvailability, setEnergyAvailability] = useState(0);
    const [pricingInsights, setPricingInsights] = useState(0);

    // Function to simulate real-time energy data
    const updateEnergyData = () => {
        const production = Math.floor(Math.random() * 1000);  // Random energy production
        const availability = Math.floor(Math.random() * 500); // Random energy availability
        const pricing = calculatePricing(availability);

        setEnergyProduction(production);
        setEnergyAvailability(availability);
        setPricingInsights(pricing);

        // Trigger notification if production exceeds peak demand threshold
        if (production > 800) {
            setPeakDemand(true);
        } else {
            setPeakDemand(false);
        }
    };

    // Function to calculate real-time pricing based on availability
    const calculatePricing = (availability) => {
        // Basic pricing logic, increase price when availability is low
        if (availability < 100) {
            return 500;  // High pricing when energy is scarce
        } else if (availability < 300) {
            return 300;  // Medium pricing
        } else {
            return 100;  // Low pricing when energy is abundant
        }
    };

    // useEffect to simulate real-time updates
    useEffect(() => {
        const interval = setInterval(updateEnergyData, 5000); // Update every 5 seconds
        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

    return (
        <div className="bg-[#6EA0B1] p-6 rounded-lg shadow-lg w-full">
            <h2 className="text-2xl font-semibold mb-4">Energy Generation Information</h2>

            {/* Energy Production Section */}
            <div className="mb-4">
                <h3 className="text-xl font-bold">Current Energy Production</h3>
                <p className="text-lg">{energyProduction} kWh</p>
                {peakDemand && (
                    <p className="text-red-500 font-semibold">
                        ⚠️ Peak demand detected! Energy production is above normal levels.
                    </p>
                )}
            </div>

            {/* Energy Availability Section */}
            <div className="mb-4">
                <h3 className="text-xl font-bold">Energy Availability</h3>
                <p className="text-lg">{energyAvailability} kWh available</p>
            </div>

            {/* Real-time Pricing Insights */}
            <div>
                <h3 className="text-xl font-bold">Real-Time Pricing Insights</h3>
                <p className="text-lg">${pricingInsights} per kWh</p>
            </div>
        </div>
    );
};

export default EnergyInfo;
