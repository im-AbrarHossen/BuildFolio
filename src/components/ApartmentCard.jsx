import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ApartmentCard = ({ apartment }) => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleAgreement = () => {
        if (!user?.email) {
            navigate('/auth/login');
            return;
        }

        const agreementData = {
            userName: user?.displayName,
            userEmail: user?.email,
            floorNo: apartment.floorNo,
            blockName: apartment.blockName,
            apartmentNo: apartment.apartmentNo,
            rent: apartment.rent
        };

        fetch('https://building-management-server-seven.vercel.app/apartment-agreement', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(agreementData)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your agreement request has been submitted.',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                } else if (data?.error) {
                    alert(data.error);
                }
            })
            .catch(() => alert('Failed to submit agreement request.'));
    };
    return (
        <div>
            <div className="bg-pink-100 text-black border shadow-md rounded p-4">
                <img className="h-[180px] w-full object-cover rounded" src={apartment.apartmentImage} alt="Thumbnail" />
                <div className="flex items-center justify-between mt-4 font-semibold">
                    <p>Floor No: {apartment.floorNo}</p>
                    <p>{apartment.blockName}</p>
                </div>
                <div className="flex items-center justify-between font-semibold">
                    <p>Apartment No: {apartment.apartmentNo}</p>
                    <p>Rent: {apartment.rent}</p>
                </div>
                <button
                    onClick={handleAgreement}
                    className="btn mt-4 w-full bg-[#026C84] text-white rounded hover:bg-[#2c7c8f]">
                    {apartment.agreementButton}
                </button>
            </div>
        </div>
    );
};

export default ApartmentCard;