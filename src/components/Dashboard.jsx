import React from 'react';
import EnergyAction from './EnergyAction';
import EnergyInfo from './EnergyInfo';

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-[#264059] text-white p-8">
            <h1 className="text-4xl font-bold mb-8">Energy Management Dashboard</h1>
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <EnergyInfo />
                <EnergyAction />
            </div>
        </div>
    );
};

export default Dashboard;
