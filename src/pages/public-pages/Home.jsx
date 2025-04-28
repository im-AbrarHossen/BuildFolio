import AboutBuilding from "../../components/AboutBuilding";
import AmenitiesFacilities from "../../components/AmenitiesFacilities";
import ApartmentLocation from "../../components/ApartmentLocation";
import Banner from "../../components/Banner";
import BlogArticles from "../../components/BlogArticles";
import ContactUs from "../../components/ContactUs";
import CustomerTestimonials from "../../components/CustomerTestimonials";
import FAQSection from "../../components/FAQSection";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import RentalProcess from "../../components/RentalProcess";
import WhyChooseUs from "../../components/WhyChooseUs";

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
                <WhyChooseUs></WhyChooseUs>
                <AmenitiesFacilities></AmenitiesFacilities>
                <CustomerTestimonials></CustomerTestimonials>
                <RentalProcess></RentalProcess>
                <BlogArticles></BlogArticles>
                <FAQSection></FAQSection>
                <ContactUs></ContactUs>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Home;