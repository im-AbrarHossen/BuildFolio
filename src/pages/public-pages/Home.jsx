import AboutBuilding from "../../components/AboutBuilding";
import ApartmentLocation from "../../components/ApartmentLocation";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Home = () => {
    return (
        <div>
            <header className="bg-[#026C84] py-2 w-full fixed top-0 left-0 right-0 z-[100]">
                <Navbar></Navbar>
            </header>
            <main>
                <Banner></Banner>
                <AboutBuilding></AboutBuilding>
                <ApartmentLocation></ApartmentLocation>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Home;