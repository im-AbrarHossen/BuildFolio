import React, { useContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../providers/AuthProvider";
import Loading from "../components/Loading";

const MemberRouter = ({ children }) => {
  const { user } = useContext(AuthContext); // Get user context
  const [isMember, setIsMember] = useState(null); // State to track if the user is a member
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    if (!user) {
      return; // If user is not authenticated, skip fetching member data
    }

    const fetchMemberData = async () => {
      try {
        const { data } = await axios.get(
          "https://building-management-server-seven.vercel.app/members"
        );

        const member = data.find((member) => member.userEmail === user?.email);

        if (member) {
          setIsMember(true); // User is a member
        } else {
          setIsMember(false); // User is not a member
        }
      } catch (error) {
        console.error("Error fetching member data:", error);
        setError("Failed to verify membership. Please try again later."); // Show a user-friendly error
      }
    };

    fetchMemberData();
  }, [user]);

  if (isMember === null) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loading /> {/* Assuming a Spinner component for loading indication */}
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  // Redirect if the user is not a member
  if (!isMember) {
    return <Navigate to="/dashboard" />;
  }

  return children;
};

export default MemberRouter;