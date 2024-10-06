import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

// Registering the components of Chart.js
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const EnergyConsumption = () => {
    // State to store energy consumption data
    const [energyData, setEnergyData] = useState([]);
    const [totalConsumption, setTotalConsumption] = useState(0);

    // Mock Data
    useEffect(() => {
        const fetchEnergyData = async () => {
            // Simulated API call to fetch energy consumption data
            const data = [
                { time: '8 AM', consumption: 120 },
                { time: '10 AM', consumption: 150 },
                { time: '12 PM', consumption: 180 },
                { time: '2 PM', consumption: 170 },
                { time: '4 PM', consumption: 200 },
                { time: '6 PM', consumption: 220 },
            ];
            setEnergyData(data);
            setTotalConsumption(data.reduce((sum, item) => sum + item.consumption, 0));
        };

        fetchEnergyData();
    }, []);

    // Prepare data for the chart
    const chartData = {
        labels: energyData.map((entry) => entry.time),
        datasets: [
            {
                label: 'Energy Consumption (kWh)',
                data: energyData.map((entry) => entry.consumption),
                borderColor: '#E5690B',
                backgroundColor: 'rgba(229, 105, 11, 0.5)',
                fill: true,
                pointBorderColor: '#264059',
                pointBackgroundColor: '#E5690B',
                pointRadius: 5,
                tension: 0.4, // Smoother curve for the line
            },
        ],
    };

    return (
        <div className="bg-[#264059] p-6 rounded-lg shadow-lg w-full">
            <h2 className="text-2xl text-white font-bold">Energy Consumption</h2>
            <p className="text-white mt-4">View detailed insights into your energy consumption patterns.</p>

            {/* Display total consumption */}
            <div className="bg-[#E5690B] mt-6 p-4 rounded-md text-white text-center">
                <h3 className="text-xl font-semibold">Total Consumption Today</h3>
                <p className="text-3xl mt-2">{totalConsumption} kWh</p>
            </div>

            {/* Energy consumption trend chart */}
            <div className="mt-6">
                <Line data={chartData} />
            </div>

            {/* Additional insights */}
            <div className="mt-6 bg-[#6EA0B1] p-4 rounded-md text-white">
                <h3 className="text-xl font-semibold">Daily Summary</h3>
                <p>Total energy consumed today: {totalConsumption} kWh.</p>
                <p>Peak consumption time: {energyData.length > 0 ? energyData[energyData.length - 1].time : 'N/A'}.</p>
            </div>
        </div>
    );
};

export default EnergyConsumption;
