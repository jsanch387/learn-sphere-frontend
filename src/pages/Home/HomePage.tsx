import React from "react";
import Navbar from "../../components/Navbar/Navbar";

import PersonalizedLearning from "../../components/Home/PersonalizedLearning/PersonalizedLearning";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Home/Hero/Hero";
import FeaturedCourses from "../../components/Home/FeaturedCourses/FeaturedCourses";
import SuccessStories from "../../components/Home/SuccessStories/SuccessStories";
import { CallToAction } from "@mui/icons-material";

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
