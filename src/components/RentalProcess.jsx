const RentalProcess = () => {
    return (
        <section className="py-[50px] bg-white">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">How to Rent an Apartment</h2>
                <p className="text-gray-600 mb-8">
                    Follow these simple steps to find and rent your perfect home.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-6 bg-gray-100 shadow-lg rounded-xl">
                        <h3 className="text-xl font-semibold text-gray-700">1. Search & Select</h3>
                        <p className="text-gray-500 mt-2">Browse available apartments and choose the one that suits you.</p>
                    </div>
                    <div className="p-6 bg-gray-100 shadow-lg rounded-xl">
                        <h3 className="text-xl font-semibold text-gray-700">2. Schedule a Visit</h3>
                        <p className="text-gray-500 mt-2">Book a tour to visit the apartment and check the facilities.</p>
                    </div>
                    <div className="p-6 bg-gray-100 shadow-lg rounded-xl">
                        <h3 className="text-xl font-semibold text-gray-700">3. Submit Application</h3>
                        <p className="text-gray-500 mt-2">Fill out the rental application form and provide necessary documents.</p>
                    </div>
                    <div className="p-6 bg-gray-100 shadow-lg rounded-xl">
                        <h3 className="text-xl font-semibold text-gray-700">4. Get Approved</h3>
                        <p className="text-gray-500 mt-2">Our team reviews your application and approves eligible tenants.</p>
                    </div>
                    <div className="p-6 bg-gray-100 shadow-lg rounded-xl">
                        <h3 className="text-xl font-semibold text-gray-700">5. Sign the Lease</h3>
                        <p className="text-gray-500 mt-2">Read and sign the rental agreement to finalize the process.</p>
                    </div>
                    <div className="p-6 bg-gray-100 shadow-lg rounded-xl">
                        <h3 className="text-xl font-semibold text-gray-700">6. Move In & Enjoy</h3>
                        <p className="text-gray-500 mt-2">Move into your new home and enjoy your stay.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RentalProcess;  