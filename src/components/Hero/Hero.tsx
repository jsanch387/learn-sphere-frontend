import React from "react";
import { Typography, Grid } from "@mui/material";
import {
  HeroContainer,
  FeatureCard,
  FeatureIconContainer,
  FeatureGrid,
  CTAButton,
} from "./Hero.styles";
import { motion } from "framer-motion";
import { useInView } from "react-hook-inview";

interface Feature {
  id: number;
  icon: string | undefined;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    id: 1,
    icon: " https://cdn-icons-png.flaticon.com/512/2746/2746756.png",
    title: "Personalized Learning Paths",
    description:
      "Customized learning experiences tailored to your unique needs.",
  },
  {
    id: 2,
    icon: "https://cdn-icons-png.flaticon.com/512/2289/2289637.png",
    title: "AI-Powered Recommendations",
    description: "Intelligent suggestions to help you learn more effectively.",
  },
  {
    id: 3,
    icon: " https://cdn-icons-png.flaticon.com/512/3371/3371846.png",
    title: "Community of Learners",
    description: "Connect and collaborate with like-minded individuals.",
  },
  {
    id: 4,
    icon: "https://cdn-icons-png.flaticon.com/512/2289/2289652.png",
    title: "Real-Time Feedback",
    description: "Get instant feedback on your performance and progress.",
  },
];

const Hero: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <HeroContainer>
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h2"
            fontWeight={700}
            fontSize="4rem"
            gutterBottom
          >
            Unlock Your Potential with LearnSphere
          </Typography>
        </motion.div>
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Typography
            variant="h5"
            fontWeight={400}
            fontSize="1.5rem"
            gutterBottom
          >
            Experience the Future of Personalized Learning Powered by AI
          </Typography>
        </motion.div>
        <FeatureGrid container spacing={2}>
          {features.map((feature) => (
            <Grid item key={feature.id} xs={12} sm={6} md={3}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <FeatureCard>
                  <FeatureIconContainer>
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      width={64}
                      height={64}
                    />
                  </FeatureIconContainer>
                  <Typography variant="h6" component="h3" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1">{feature.description}</Typography>
                </FeatureCard>
              </motion.div>
            </Grid>
          ))}
        </FeatureGrid>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <CTAButton variant="contained" size="large">
                Get Started
              </CTAButton>
            </motion.div>
          </Grid>
          <Grid item>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <CTAButton variant="outlined" size="large">
                Learn More
              </CTAButton>
            </motion.div>
          </Grid>
        </Grid>
      </HeroContainer>
    </motion.div>
  );
};

export default Hero;
