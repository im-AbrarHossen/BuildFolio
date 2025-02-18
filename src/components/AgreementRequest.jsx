import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const AgreementRequest = () => {
  const [requests, setRequests] = useState([]);

  // Fetch agreement requests from the backend
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get("https://building-management-server-seven.vercel.app/apartment-agreement");
        setRequests(response.data);
      } catch (error) {
        console.error("Error fetching requests:", error);
      }
    };

    fetchRequests();
  }, []);

  // Handle status update (Accept)
  const handleUpdateStatus = async (id, status) => {
    try {
      const response = await axios.put(`https://building-management-server-seven.vercel.app/apartment-agreement/${id}`, {
        status,
      });

      if (response.data.modifiedCount > 0 || response.data.success) {
        // Remove request after action if it's accepted or deleted
        setRequests((prevRequests) =>
          prevRequests.filter((request) => request._id !== id)
        );

        Swal.fire({
          title: "Success!",
          text: `Request has been ${status === 'accepted' ? 'accepted' : 'deleted'}.`,
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "Failed to update status",
          icon: "error",
          confirmButtonText: "Try Again",
        });
      }
    } catch (error) {
      console.error("Error updating status:", error);
      Swal.fire("Error", "An error occurred while updating status.", "error");
    }
  };

  // Confirm rejection with SweetAlert
  const handleReject = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This request will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, Reject it!",
    }).then((result) => {
      if (result.isConfirmed) {
        handleUpdateStatus(id, "rejected");
      }
    });
  };

  return (
    <div className="w-11/12 mx-auto py-[100px]">
      <h1 className="text-center text-lg md:text-2xl font-bold">Agreement Requests</h1>
      <div className="mt-10">
        {requests.length === 0 ? (
          <p className="text-center text-gray-600">No requests available.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {requests.map((request) => (
              <div key={request._id} className="border border-gray-300 rounded-lg p-4 shadow-sm">
                <p className="text-sm font-medium">
                  <span className="font-bold">Name:</span> {request.userName}
                </p>
                <p className="text-sm font-medium">
                  <span className="font-bold">Email:</span> {request.userEmail}
                </p>
                <p className="text-sm font-medium">
                  <span className="font-bold">Floor:</span> {request.floorNo}
                </p>
                <p className="text-sm font-medium">
                  <span className="font-bold">Apartment:</span> {request.apartmentNo}
                </p>
                <p className="text-sm font-medium">
                  <span className="font-bold">Rent:</span> ${request.rent}
                </p>
                <p className="text-sm font-medium">
                  <span className="font-bold">Status:</span> {request.status}
                </p>
                <div className="mt-4 flex gap-2">
                  {request.status === "pending" ? (
                    <>
                      <button
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200 w-full"
                        onClick={() => handleUpdateStatus(request._id, "accepted")}
                      >
                        Accept
                      </button>
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200 w-full"
                        onClick={() => handleReject(request._id)}
                      >
                        Reject
                      </button>
                    </>
                  ) : (
                    <span className="text-gray-500">Processed</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AgreementRequest;