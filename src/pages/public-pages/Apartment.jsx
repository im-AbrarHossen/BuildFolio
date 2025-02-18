import Apartments from "../../components/Apartments";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Apartment = () => {
    return (
        <div>
            <header className="bg-[#026C84] py-2 w-full fixed top-0 left-0 z-50">
                <Navbar></Navbar>
            </header>
            <main className="pt-[100px] my-10">
                <Apartments></Apartments>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Apartment;