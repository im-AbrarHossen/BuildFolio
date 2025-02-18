import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const MakeAnnouncement = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://building-management-server-seven.vercel.app/announcements",
        { title, message }
      );

      if (response.status === 201 && response.data.success) {
        await Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Announcement created successfully!",
          confirmButtonColor: "#3085d6",
        });
        setTitle(""); // Reset form
        setMessage("");
      } else {
        throw new Error("Unexpected response format");
      }
    } catch (error) {
      console.error("Error creating announcement:", error);

      await Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Failed to create the announcement. Please try again.",
        confirmButtonColor: "#d33",
      });
    }
  };

  return (
    <div className="w-11/12 mx-auto py-10 mt-10">
      <h1 className="text-lg font-bold text-center mb-6">Make Announcement</h1>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        {/* Title Input */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title</label>
          <input
            type="text"
            id="title"
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            placeholder="Enter announcement title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* Message Input */}
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
          <textarea
            id="message"
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            placeholder="Enter announcement message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default MakeAnnouncement;