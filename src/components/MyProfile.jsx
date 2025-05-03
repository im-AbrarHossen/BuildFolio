import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";

const ProgressBar = ({ value }) => {
    return (
        <div className="w-11/12 mx-auto mt-4">
            <div className="relative w-full h-6 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                <div
                    className="h-full bg-blue-500 transition-all duration-500 ease-in-out"
                    style={{ width: `${value}%` }}
                ></div>
            </div>
            <p className="text-center mt-2 text-gray-700 font-semibold">{value}%</p>
        </div>
    );
};

const MyProfile = () => {
    const { user } = useContext(AuthContext);
    const [totalMembers, setTotalMembers] = useState(0);
    const [totalRooms, setTotalRooms] = useState(0);
    const [adminEmails, setAdminEmails] = useState([]);
    const [memberEmails, setMemberEmails] = useState([]);
    const [agreementDate, setAgreementDate] = useState(null);
    const [memberData, setMemberData] = useState([]);

    useEffect(() => {
        axios.get("https://building-management-server-seven.vercel.app/members")
            .then((response) => {
                setTotalMembers(response.data.length); 
                // Find the logged-in user's agreement date
                const member = response.data.find(member => member.userEmail === user.email);
                if (member) {
                    setAgreementDate(new Date(member.agreementDate).toLocaleDateString());
                    setMemberData(member);
                }
            })
            .catch((error) => {
                console.error("Error fetching members:", error);
            });
    }, [user.email]);

    useEffect(() => {
        axios.get("https://building-management-server-seven.vercel.app/apartments")
            .then((response) => {
                setTotalRooms(response.data.length); // Assuming response.data is an array of members
            })
            .catch((error) => {
                console.error("Error fetching members:", error);
            });
    });

    useEffect(() => {
        const fetchRoles = async () => {
            try {
                const adminResponse = await axios.get(
                    "https://building-management-server-seven.vercel.app/admin"
                );
                const memberResponse = await axios.get(
                    "https://building-management-server-seven.vercel.app/members"
                );

                setAdminEmails(adminResponse.data.map((admin) => admin.userEmail));
                setMemberEmails(memberResponse.data.map((member) => member.userEmail));
            } catch (error) {
                console.error("Error fetching roles:", error);
            }
        };

        fetchRoles();
    }, []);


    return (
        <div className="w-11/12 mx-auto">
            {/* Profile Header */}
            <div className="flex flex-col items-center py-[80px]">
                <img
                    src={user.photoURL}
                    alt={`${user.displayName}'s profile`}
                    className="lg:rounded-xl lg:w-[150px] lg:h-[150px] lg:object-cover w-20 h-20 rounded-full object-cover border"
                />
                <div className="text-center">
                    <h1 className="text-2xl font-semibold text-gray-800">{user.displayName}</h1>
                    <p className="text-gray-600">{user.email}</p>
                </div>
            </div>

            {/* Profile Details */}
            {
                adminEmails.includes(user.email) && (
                    <>
                        <div className="flex gap-3 items-center mt-4">
                            <h1 className="flex-1 text-lg font-bold">Total Number Of Rooms</h1>
                            <p className="text-center flex-1">{totalRooms}</p>
                        </div><div className="flex gap-3 items-center">
                            <h1 className="flex-1 text-lg font-bold">Percentage Of Available Rooms</h1>
                            <div className="flex-1">
                                <ProgressBar value={100} />
                            </div>
                        </div><div className="flex gap-3 items-center">
                            <h1 className="flex-1 text-lg font-bold">Percentage of Unavailable rooms</h1>
                            <div className="flex-1">
                                <ProgressBar value={0} />
                            </div>
                        </div><div className="flex gap-3 items-center mt-4">
                            <h1 className="flex-1 text-lg font-bold">Number Of Users</h1>
                            <p className="flex-1 text-center">4</p>
                        </div><div className="flex gap-3 items-center mt-4">
                            <h1 className="flex-1 text-lg font-bold">Number Of Members</h1>
                            <p className="text-center flex-1">{totalMembers}</p>
                        </div>
                    </>
                )
            }
            {
                memberEmails.includes(user.email) && (
                    <>
                        <div className="text-lg font-bold">
                            <h1>Agreement accept date: {agreementDate}</h1>
                            <h1>Floor No: {memberData.floorNo}</h1>
                            <h1>Block: {memberData.blockName}</h1>
                            <h1>Room No: {memberData.apartmentNo}</h1>
                        </div>
                    </>
                )
            }
        </div>
    );
};

export default MyProfile;