import Lottie from "lottie-react";
import PrimeLocation from "../assets/jsonFiles/PrimeLocation.json";
import Fitness from "../assets/jsonFiles/Fitness.json";
import GreenHome from "../assets/jsonFiles/GreenHome.json"

const AboutBuilding = () => {
  return (
    <div className="mt-[50px] py-[50px] bg-gray-100">
      <div className="w-11/12 mx-auto text-center">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
          About the Building
        </h2>
        <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-8">
          Nestled in the heart of the city, our building is a masterpiece of
          modern architecture. Designed to offer luxury and comfort, it features
          spacious apartments with stunning city views, state-of-the-art
          amenities, and sustainable living solutions. Whether you're looking for
          a peaceful retreat or a vibrant community, our building has everything
          you need to live your best life.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mt-8 max-w-6xl mx-auto px-6 text-center">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm">
          <div className='flex lg:flex-row sm:flex-row flex-col-reverse items-center justify-between'>
            <h3 className="text-xl font-semibold text-gray-700">
              Prime Location
            </h3>
            <Lottie
              animationData={PrimeLocation}
              loop
              autoplay
              className="w-[50px]"
            />
          </div>
          <p className="text-gray-600 lg:text-left sm:text-left text-center">
            Enjoy easy access to shopping malls, parks, schools, and top-notch
            dining spots, all just minutes away.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm">
          <div className="flex lg:flex-row sm:flex-row flex-col-reverse items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-700">
              Modern Amenities
            </h3>
            <Lottie
              animationData={Fitness}
              loop
              autoplay
              className="w-[50px]"
            />
          </div>
          <p className="text-gray-600 lg:text-left sm:text-left text-center">
            Features include a rooftop pool, fitness center, co-working spaces,
            and 24/7 security to meet all your needs.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm">
          <div className="flex lg:flex-row sm:flex-row flex-col-reverse items-center justify-between">
            <h3 className="text-xl font-semibold text-gray-700">
              Eco-Friendly Design
            </h3>
            <Lottie
              animationData={GreenHome}
              loop
              autoplay
              className="w-[50px]"
            />
          </div>
          <p className="text-gray-600 lg:text-left sm:text-left text-center">
            Built with sustainability in mind, our building uses energy-efficient
            systems and green building materials.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutBuilding;