import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const EnergyMarketplace = ({ availableEnergy, onTradeComplete, onClose }) => {
    const [marketplaceOffers, setMarketplaceOffers] = useState([]);
    const [priceTrends, setPriceTrends] = useState([]);
    const [carbonSaved, setCarbonSaved] = useState(0);
    const [tradeHistory, setTradeHistory] = useState([]);
    const [leaderboard, setLeaderboard] = useState([]);
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        // Fetch marketplace offers
        const offers = [
            { id: 1, buyer: 'Microgrid A', location: 'City A', demand: 30, price: '$5.00/kWh', reputation: 4.7 },
            { id: 2, buyer: 'External Buyer B', location: 'City B', demand: 50, price: '$4.50/kWh', reputation: 4.5 },
            { id: 3, buyer: 'Microgrid C', location: 'City C', demand: 25, price: '$4.00/kWh', reputation: 4.8 },
        ];
        setMarketplaceOffers(offers);

        // Simulate fetching real-time price trends (example data)
        const trends = [4.0, 4.2, 4.5, 4.8, 5.0, 4.7, 4.6, 5.1, 5.3];
        setPriceTrends(trends);

        // Simulate fetching user ratings
        const ratings = [
            { buyer: 'Microgrid A', rating: 4.7, review: 'Reliable, quick payments' },
            { buyer: 'External Buyer B', rating: 4.5, review: 'Negotiated fair prices' },
        ];

        // Simulate fetching leaderboard data
        const leaderboardData = [
            { name: 'Trader A', trades: 15, revenue: '$150.00', carbonSaved: '45 kg' },
            { name: 'Trader B', trades: 12, revenue: '$130.00', carbonSaved: '40 kg' },
        ];
        setLeaderboard(leaderboardData);

        // Simulate fetching notifications
        const notificationData = [
            { message: 'Market price has increased!', timestamp: new Date().toLocaleString() },
            { message: 'New trading offers available!', timestamp: new Date().toLocaleString() },
        ];
        setNotifications(notificationData);
    }, []);

    const handleTrade = (offer) => {
        onTradeComplete(offer.demand, offer.price);
        setTradeHistory((prev) => [...prev, { offer, timestamp: new Date().toLocaleString() }]);
        setCarbonSaved((prev) => prev + (offer.demand * 0.15)); // Assume 0.15 kg CO2 saved per kWh traded
    };

    const data = {
        labels: Array.from({ length: priceTrends.length }, (_, i) => `Day ${i + 1}`),
        datasets: [
            {
                label: 'Price Trend ($/kWh)',
                data: priceTrends,
                fill: false,
                borderColor: 'rgba(75,192,192,1)',
                tension: 0.1,
            },
        ],
    };

    return (
        <div className="fixed inset-0 bg-white bg-opacity-95 z-50 p-6 flex flex-col">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Energy Marketplace</h2>
                <button onClick={onClose} className="text-xl font-bold">&times;</button>
            </div>
            <div className="flex-grow overflow-y-auto">
                {/* Price Trend Chart */}
                <h3 className="text-lg font-semibold">Price Trend</h3>
                <div className="h-64 mb-4">
                    <Line data={data} />
                </div>

                {/* Marketplace Offers */}
                <h3 className="text-lg font-semibold">Marketplace Offers</h3>
                <ul className="space-y-2">
                    {marketplaceOffers.map((offer) => (
                        <li key={offer.id} className="border p-4 rounded-md shadow-md flex justify-between">
                            <div>
                                <h4 className="font-semibold">{offer.buyer}</h4>
                                <p>{offer.location}</p>
                                <p>Demand: {offer.demand} kWh</p>
                                <p>Price: {offer.price}</p>
                                <p>Reputation: {offer.reputation} ⭐</p>
                            </div>
                            <button
                                onClick={() => handleTrade(offer)}
                                className="bg-[#264059] text-white py-2 px-4 rounded-md hover:bg-[#1f3c49]"
                            >
                                Trade
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Carbon Saved */}
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">Carbon Saved</h3>
                    <p>{carbonSaved} kg</p>
                </div>

                {/* Trade History */}
                <h3 className="text-lg font-semibold mt-4">Trade History</h3>
                <ul className="space-y-2">
                    {tradeHistory.map((trade, index) => (
                        <li key={index} className="border p-2 rounded-md">
                            Traded {trade.offer.demand} kWh with {trade.offer.buyer} at {trade.timestamp}
                        </li>
                    ))}
                </ul>

                {/* Leaderboard */}
                <h3 className="text-lg font-semibold mt-4">Leaderboard</h3>
                <ul className="space-y-2">
                    {leaderboard.map((trader, index) => (
                        <li key={index} className="border p-2 rounded-md">
                            {trader.name} - Trades: {trader.trades}, Revenue: {trader.revenue}, Carbon Saved: {trader.carbonSaved}
                        </li>
                    ))}
                </ul>

                {/* Notifications */}
                <h3 className="text-lg font-semibold mt-4">Notifications</h3>
                <div className="space-y-2">
                    {notifications.map((notification, index) => (
                        <div key={index} className="p-4 border rounded-md bg-white shadow-md">
                            {notification.message}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EnergyMarketplace;
