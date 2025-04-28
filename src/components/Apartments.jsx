import { useEffect, useState } from "react";
import ApartmentCard from "./ApartmentCard";

const Apartments = () => {
    const [apartments, setApartments] = useState([]); // All apartments data
    const [filteredApartments, setFilteredApartments] = useState([]); // Filtered by search or range
    const [currentPage, setCurrentPage] = useState(1);
    const [rentRange, setRentRange] = useState({ min: '', max: '' });
    const itemsPerPage = 12;

    // Fetch apartments
    useEffect(() => {
        fetch("https://building-management-server-seven.vercel.app/apartments")
            .then((res) => res.json())
            .then((data) => {
                setApartments(data);
                setFilteredApartments(data);
            });
    }, []);

    // Pagination logic
    const totalPages = Math.ceil(filteredApartments.length / itemsPerPage);
    const currentItems = filteredApartments.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Handle rent range search
    const handleSearch = () => {
        const minRent = parseFloat(rentRange.min) || 0;
        const maxRent = parseFloat(rentRange.max) || Infinity;

        const filtered = apartments.filter(
            (apartment) =>
                apartment.rent >= minRent && apartment.rent <= maxRent
        );
        setFilteredApartments(filtered);
        setCurrentPage(1); // Reset to first page after filtering
    };

    // Handle pagination
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="mx-auto w-11/12">
            <h2 className="text-2xl font-bold text-center mb-6">Apartments</h2>

            {/* Search Rent Range */}
            <div className="flex lg:flex-row sm:flex-row md:flex-row flex-col gap-4 mb-6 justify-center">
                <input
                    type="number"
                    placeholder="Min Rent"
                    value={rentRange.min}
                    onChange={(e) =>
                        setRentRange({ ...rentRange, min: e.target.value })
                    }
                    className="border rounded p-2"
                />
                <input
                    type="number"
                    placeholder="Max Rent"
                    value={rentRange.max}
                    onChange={(e) =>
                        setRentRange({ ...rentRange, max: e.target.value })
                    }
                    className="border rounded p-2"
                />
                <button
                    onClick={handleSearch}
                    className="bg-[#026C84] hover:bg-[#2c7c8f] text-white px-4 py-2 rounded"
                >
                    Search
                </button>
            </div>

            {/* Apartments Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {currentItems.map((apartment) => (
                    <ApartmentCard
                        key={apartment._id}
                        apartment={apartment}
                    ></ApartmentCard>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center mt-10 gap-2 flex-wrap">
                {/* Previous Button */}
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 border rounded ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"
                        }`}
                >
                    Previous
                </button>

                {/* Page Numbers */}
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`px-4 py-2 border rounded ${currentPage === index + 1
                                ? "bg-[#026C84] hover:bg-[#2c7c8f] text-white"
                                : "bg-gray-200 hover:bg-gray-300"
                            }`}
                    >
                        {index + 1}
                    </button>
                ))}

                {/* Next Button */}
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 border rounded ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"
                        }`}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Apartments;