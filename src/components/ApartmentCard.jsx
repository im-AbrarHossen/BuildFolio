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
                    Swal.fire({
                        title: 'Error!',
                        text: `${data.error}`,
                        icon: 'error',
                        confirmButtonText: 'Cool'
                    });
                }
            })
            .catch(() => alert('Failed to submit agreement request.'));
    };
    return (
        <div>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden text-black border">
                <img className="h-[180px] w-full object-cover rounded rounded-b-none" src={apartment.apartmentImage} alt="Thumbnail" />
                <div className="p-4">
                    <div className="flex items-center justify-between font-semibold">
                        <p>Floor No: {apartment.floorNo}</p>
                        <p>{apartment.blockName}</p>
                    </div>
                    <div className="flex items-center justify-between font-semibold">
                        <p>Apartment No: {apartment.apartmentNo}</p>
                        <p>Rent: {apartment.rent}</p>
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            onClick={handleAgreement}
                            className="mt-4 btn btn-outline text-[#026C84] hover:bg-[#026C84] border-[#026C84] w-full font-bold rounded">
                            {apartment.agreementButton}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApartmentCard;