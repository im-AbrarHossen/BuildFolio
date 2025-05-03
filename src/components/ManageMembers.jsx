import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const ManageMembers = () => {
  const [members, setMembers] = useState([]);

  // Fetch members from backend
  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get(
          "https://building-management-server-seven.vercel.app/members"
        );
        setMembers(response.data);
      } catch (error) {
        console.error("Error fetching members:", error);
      }
    };

    fetchMembers();
  }, []);

  // Handle member removal with SweetAlert2
  const handleRemove = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This member will lose access to the dashboard!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, remove!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(
            `https://building-management-server-seven.vercel.app/members/${id}`
          );
          setMembers(members.filter((member) => member._id !== id));

          Swal.fire("Removed!", "The member has been removed.", "success");
        } catch (error) {
          console.error("Error deleting member:", error);
          Swal.fire("Error!", "Something went wrong.", "error");
        }
      }
    });
  };

  return (
    <div className="w-11/12 mx-auto mt-[120px]">
      <h2 className="text-2xl font-bold mb-6 text-center">Manage Members</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member) => (
          <div
            key={member._id}
            className="bg-white shadow-lg rounded-lg p-4 border border-gray-200"
          >
            <h3 className="text-lg font-semibold">{member.userName}</h3>
            <p className="text-gray-600 break-words overflow-hidden">{member.userEmail}</p>
            <button
              className="mt-3 bg-primary text-white btn border-none hover:bg-secondary w-full"
              onClick={() => handleRemove(member._id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageMembers;