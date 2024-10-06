import React from 'react';
import EnergyConsumption from './EnergyConsumption';
import EnergyGeneration from './EnergyGeneration';
import EnergyTrading from './EnergyTrading';
import EnergyAction from './EnergyAction';
import SustainabilityIncentives from './SustainabilityIncentives';
import EnergyUsageOptimization from './EnergyUsageOptimization';

const Dashboard = () => {
    return (
        <div className="p-6 bg-[#9F5D35] min-h-screen rounded-lg">
            <h1 className="text-3xl text-white font-bold mb-6">Energy Dashboard</h1>
            <div className="grid grid-cols-2 gap-6">
                <EnergyConsumption />
                <EnergyGeneration />
                <EnergyTrading />
                <EnergyAction />
                <SustainabilityIncentives />
                <EnergyUsageOptimization />
            </div>
        </div>
    );
};

export default Dashboard;
