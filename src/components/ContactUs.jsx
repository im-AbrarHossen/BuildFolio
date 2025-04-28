const ContactUs = () => {
    return (
        <section className="py-[50px] bg-gray-100">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Get In Touch</h2>
                <p className="text-gray-600 mb-8">Have questions? Contact us for more information.</p>
                <form className="max-w-2xl mx-auto bg-white p-6 shadow-md rounded-lg">
                    <div className="mb-4">
                        <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg" required />
                    </div>
                    <div className="mb-4">
                        <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg" required />
                    </div>
                    <div className="mb-4">
                        <textarea placeholder="Your Message" className="w-full p-3 border rounded-lg h-32" required></textarea>
                    </div>
                    <button type="submit" className="btn bg-[#026C84] text-white rounded hover:bg-[#2c7c8f] w-full transition">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactUs;  