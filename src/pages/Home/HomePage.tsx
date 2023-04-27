import React from "react";
import Navbar from "../../components/Navbar/Navbar";

import FeaturedCourses from "../../components/FeaturedCourses/FeaturedCourses";
import PersonalizedLearning from "../../components/PersonalizedLearning/PersonalizedLearning";
import SuccessStories from "../../components/SuccessStories/SuccessStories";
import CallToAction from "../../components/CallToAction/CallToAction";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedCourses />
      <PersonalizedLearning />
      <SuccessStories />
      <CallToAction />
      <Footer />
    </>
  );
};

export default HomePage;
