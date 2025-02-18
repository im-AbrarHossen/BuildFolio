import React, { useState, useEffect } from "react";
import axios from "axios";

const Announcements = () => {
    const [announcements, setAnnouncements] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchAnnouncements = async () => {
            try {
                const response = await axios.get("https://building-management-server-seven.vercel.app/announcements");
                setAnnouncements(response.data);
                setLoading(false);
            } catch (error) {
                setError("Failed to fetch announcements.");
                setLoading(false);
            }
        };

        fetchAnnouncements();
    }, []);

    if (loading) {
        return <div>Loading announcements...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="w-11/12 mx-auto py-10 mt-10">
            <h1 className="text-xl font-bold text-center mb-6">All Announcements</h1>
            
            {announcements.length === 0 ? (
                <p>No announcements found.</p>
            ) : (
                <ul>
                    {announcements.map((announcement) => (
                        <li key={announcement._id} className="bg-white shadow-md rounded-lg p-4 mb-4">
                            <h2 className="text-lg font-bold">{announcement.title}</h2>
                            <p>{announcement.message}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Announcements;