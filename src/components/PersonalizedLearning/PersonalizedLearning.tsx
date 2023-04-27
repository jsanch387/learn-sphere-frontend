import React from "react";
import { Typography, Grid, Avatar } from "@mui/material";
import {
  PersonalizedLearningContainer,
  FeatureCard,
} from "./PersonalizedLearning.styles";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import { useInView } from "react-hook-inview";
import { motion } from "framer-motion";

interface Feature {
  id: number;
  icon: string | undefined;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    id: 1,
    icon: "https://example.com/icon1.png",
    title: "Personalized Learning Path",
    description:
      "Our AI-driven platform creates a customized learning path tailored to your needs and learning style.",
  },
  {
    id: 2,
    icon: "https://example.com/icon2.png",
    title: "Adaptive Learning Experience",
    description:
      "Experience a unique learning experience that adapts as you progress, ensuring an optimal learning journey.",
  },
  {
    id: 3,
    icon: "https://example.com/icon3.png",
    title: "Real-Time Feedback and Progress Tracking",
    description:
      "Receive instant feedback on your performance and track your progress, enabling you to quickly identify areas for improvement.",
  },
];

const PersonalizedLearning: React.FC = () => {
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
      <PersonalizedLearningContainer>
        <Typography variant="h4" component="h2" gutterBottom>
          Personalized Learning and AI-Driven Content
        </Typography>
        <Typography variant="body1" paragraph>
          Experience a new and exciting way of learning with LearnSphere's
          AI-driven educational platform.
        </Typography>
        <Grid container justifyContent="center" spacing={4}>
          {features.map((feature) => (
            <Grid item key={feature.id} xs={12} sm={6} md={4}>
              <FeatureCard>
                <Avatar
                  alt={feature.title}
                  src={feature.icon}
                  sx={{ width: 64, height: 64, marginBottom: 1 }}
                >
                  {feature.icon ? null : <DynamicFeedIcon fontSize="large" />}
                </Avatar>
                <Typography variant="h6" component="h3">
                  {feature.title}
                </Typography>
                <Typography variant="body2">{feature.description}</Typography>
              </FeatureCard>
            </Grid>
          ))}
        </Grid>
      </PersonalizedLearningContainer>
    </motion.div>
  );
};

export default PersonalizedLearning;
