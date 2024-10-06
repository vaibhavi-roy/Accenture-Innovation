import React, { useState, useEffect } from 'react';

const EnergyAction = () => {
    const [storedEnergy, setStoredEnergy] = useState(0);   // Energy that is stored
    const [availableEnergy, setAvailableEnergy] = useState(500); // Mock available energy
    const [peakDemand, setPeakDemand] = useState(false);    // Track if peak demand is happening
    const [auctionPrice, setAuctionPrice] = useState(0);    // Auction price for energy

    // Simulate energy demand and availability (we assume peak demand occurs when energy production is high)
    useEffect(() => {
        const checkPeakDemand = () => {
            const energyProduction = Math.floor(Math.random() * 1000); // Mock energy production

            if (energyProduction > 800) {
                setPeakDemand(true); // Set peak demand to true if production exceeds threshold
                setAuctionPrice(energyProduction * 2); // Auction price is higher during peak
            } else {
                setPeakDemand(false);
                setAuctionPrice(0);
            }
        };

        const interval = setInterval(checkPeakDemand, 5000); // Check for peak demand every 5 seconds
        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    // Function to store energy
    const storeEnergy = () => {
        const amountToStore = 100; // Amount of energy to store per action (can be adjusted)
        if (availableEnergy >= amountToStore) {
            setStoredEnergy(storedEnergy + amountToStore);
            setAvailableEnergy(availableEnergy - amountToStore);
        } else {
            alert('Not enough available energy to store!');
        }
    };

    // Function to sell energy
    const sellEnergy = () => {
        const amountToSell = 100; // Amount of energy to sell per action (can be adjusted)
        if (storedEnergy >= amountToSell) {
            setStoredEnergy(storedEnergy - amountToSell);
            alert(`Sold ${amountToSell} kWh of energy!`);
        } else {
            alert('Not enough stored energy to sell!');
        }
    };

    // Function to auction energy (only enabled during peak demand)
    const auctionEnergy = () => {
        const amountToAuction = 100; // Amount to auction (can be adjusted)
        if (storedEnergy >= amountToAuction) {
            setStoredEnergy(storedEnergy - amountToAuction);
            alert(`Auctioned ${amountToAuction} kWh of energy at a high price of $${auctionPrice} per kWh!`);
        } else {
            alert('Not enough stored energy to auction!');
        }
    };

    return (
        <div className="bg-[#9F5D35] p-6 rounded-lg shadow-lg w-full">
            <h2 className="text-2xl font-semibold mb-4">Energy Actions</h2>

            {/* Display stored and available energy */}
            <div className="mb-4">
                <h3 className="text-xl font-bold">Stored Energy</h3>
                <p className="text-lg">{storedEnergy} kWh</p>
            </div>
            <div className="mb-4">
                <h3 className="text-xl font-bold">Available Energy</h3>
                <p className="text-lg">{availableEnergy} kWh available</p>
            </div>

            {/* Buttons to store and sell energy */}
            <div className="flex gap-4 mb-4">
                <button
                    className="bg-[#6EA0B1] text-white py-2 px-6 rounded hover:bg-opacity-90"
                    onClick={storeEnergy}
                >
                    Store Energy
                </button>
                <button
                    className="bg-[#E5690B] text-white py-2 px-6 rounded hover:bg-opacity-90"
                    onClick={sellEnergy}
                >
                    Sell Energy
                </button>
            </div>

            {/* Display auction option during peak demand */}
            {peakDemand && (
                <div className="bg-[#E5690B] p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-white">Peak Demand Alert!</h3>
                    <p className="text-lg text-white mb-2">
                        Peak energy demand detected! Auction your energy for ${auctionPrice} per kWh.
                    </p>
                    <button
                        className="bg-white text-[#E5690B] py-2 px-6 rounded hover:bg-opacity-90"
                        onClick={auctionEnergy}
                    >
                        Auction Energy
                    </button>
                </div>
            )}
        </div>
    );
};

export default EnergyAction;
