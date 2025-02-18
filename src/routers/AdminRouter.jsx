import React, { useContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../providers/AuthProvider";

const AdminRouter = ({ children }) => {
    const { user } = useContext(AuthContext);
    const [isAdmin, setIsAdmin] = useState(null);

    useEffect(() => {
        if (!user) return;
        const fetchAdminData = async () => {
            try {
                const response = await axios.get(
                    "https://building-management-server-seven.vercel.app/admin"
                );
                const admin = response.data[0]; // Assuming admin data is an array

                setIsAdmin(user.email === admin?.userEmail);
            } catch (error) {
                console.error("Error fetching admin data:", error);
                setIsAdmin(false);
            }
        };

        fetchAdminData();
    }, [user]);

    // Redirect if the user is not an admin
    if (isAdmin === null) {
        return <p>Loading...</p>; // You can replace this with a spinner
    }

    // Redirect if the user is not an admin
    if (!isAdmin) {
        return <Navigate to="/dashboard" />;
    }

    return children;
};

export default AdminRouter;