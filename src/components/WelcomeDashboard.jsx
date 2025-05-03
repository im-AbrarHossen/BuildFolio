import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const WelcomeDashboard = () => {
  const { user } = useContext(AuthContext);
  const [creationDate, setCreationDate] = useState("");
  const [daysAgo, setDaysAgo] = useState("");

  useEffect(() => {
    if (user && user.metadata?.creationTime) {
      const createdAt = new Date(user.metadata.creationTime);
      setCreationDate(createdAt.toLocaleDateString());

      // Calculate days ago
      const today = new Date();
      const diffTime = Math.abs(today - createdAt);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setDaysAgo(`${diffDays} day${diffDays > 1 ? "s" : ""} ago`);
    }
  }, [user]);

  return (
    <div>
      <div className='mt-[100px] w-11/12 mx-auto'>
        <h1 className="text-2xl font-bold text-primary text-center">
          Welcome back, {user?.displayName}!
        </h1>
        <p className="text-gray-600 text-center">
          Here's what's happening with your account today.
        </p>

        <h2 className="text-2xl font-bold text-center my-6 text-primary">Account Info</h2>

        <div className="flex justify-between items-center text-gray-700 font-medium text-lg bg-white p-6 rounded-xl shadow-md max-w-md mx-auto">
          <div>
            <span className="text-gray-500">Created On:</span><br />
            {creationDate}
          </div>
          <div className="text-right">
            <span className="text-gray-500">Since:</span><br />
            {daysAgo}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeDashboard;