import React from "react";
import HeroImage from "./../assets/hero-section-image.jpg";
import Card from "../components/Card";
import { cardData } from "../constants/cardData";

const Home = () => {
  return (
    <div>
      {/* hero section */}

      <div className="relative bg-gradient-to-r from-black from-40%">
        <img
          src={HeroImage}
          className="h-[80vh] w-full object-cover	opacity-40 "
        ></img>

        <div className="absolute top-0 left-[30%] flex flex-col justify-center items-center h-full">
          <h1 className="text-6xl font-semibold text-white">
            Welcome to FinEase
          </h1>

          <p className="text-2xl font-base text-white mt-3">
            Your Gateway to Financial Empowerment!
          </p>
        </div>
      </div>

      {/* card section */}

      <div className="py-16">
        <h1 className="text-center font-bold text-4xl">Our Products</h1>

        <div className="flex justify-around mt-12">
          {cardData.map((item, i) => (
            <Card key={i} data={item} />
          ))}
        </div>
      </div>

      <div className="py-16 px-24 text-center">
        <h1 className="text-center font-bold text-4xl">About Us</h1>

        <p className="flex justify-around mt-12 leading-7">
          At FinEase, we are dedicated to empowering individuals with the
          knowledge and tools they need to achieve financial success. With a
          team of experienced professionals and a commitment to personalized
          service, we strive to make finance accessible and approachable for
          everyone. Our comprehensive range of services includes personalized
          financial solutions, investment opportunities, and secure online
          banking. We believe in building strong, long-lasting relationships
          with our clients, guiding them towards their financial goals and
          helping them make informed decisions. Trust FinEase to be your partner
          on your financial journey and unlock the potential for a brighter and
          more secure future.
        </p>
      </div>
    </div>
  );
};

export default Home;
