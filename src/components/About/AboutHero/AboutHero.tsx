import * as React from "react";
import {
  AboutHeroContainer,
  AboutHeadline,
  AboutSubheading,
} from "./AboutHero.styles";

const AboutHero: React.FC = () => {
  return (
    <AboutHeroContainer>
      <AboutHeadline>About LearnSphere</AboutHeadline>
      <AboutSubheading>
        Empowering self-learners with AI-driven personalized education.
      </AboutSubheading>
    </AboutHeroContainer>
  );
};

export default AboutHero;
