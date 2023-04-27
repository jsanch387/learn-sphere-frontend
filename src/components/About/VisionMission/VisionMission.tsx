import React from "react";
import { Container, Grid, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import VisionIcon from "@mui/icons-material/Explore";
import MissionIcon from "@mui/icons-material/EmojiObjects";
import LearningIcon from "@mui/icons-material/School";
import PeopleIcon from "@mui/icons-material/People";
import {
  VisionMissionWrapper,
  StyledIcon,
  StatementContainer,
  StatementList,
  CallToAction,
} from "./VisionMission.styles";

const VisionMission: React.FC = () => {
  return (
    <VisionMissionWrapper>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h3" component="h1" align="center" gutterBottom>
          Empowering Learners Worldwide
        </Typography>
        <Grid container spacing={4} maxWidth="none">
          <Grid item xs={12} md={6}>
            <StyledIcon>
              <VisionIcon fontSize="large" />
            </StyledIcon>
            <StatementContainer item xs={12}>
              <Typography variant="h4" component="h2">
                Our Vision
              </Typography>
              <StatementList>
                <li>
                  Revolutionize online learning with personalized, AI-driven
                  education
                </li>
                <li>
                  Create a global community of self-learners empowered by the
                  latest AI technologies
                </li>
                <li>
                  Transform the way people learn and grow with accessible,
                  high-quality education tailored to their needs and interests
                </li>
              </StatementList>
            </StatementContainer>
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledIcon>
              <MissionIcon fontSize="large" />
            </StyledIcon>
            <StatementContainer item xs={12}>
              <Typography variant="h4" component="h2">
                Our Mission
              </Typography>
              <StatementList>
                <li>
                  Empower individuals to reach their full potential with a
                  learning platform that adapts to their unique needs and
                  learning styles
                </li>
                <li>
                  Constantly innovate and improve our platform to deliver
                  personalized learning experiences that engage and inspire
                </li>
                <li>
                  Foster a diverse and inclusive community of learners and
                  educators, united by a shared passion for knowledge and growth
                </li>
              </StatementList>
            </StatementContainer>
          </Grid>
        </Grid>
        <StyledIcon>
          <LearningIcon fontSize="large" />
          <PeopleIcon fontSize="large" />
        </StyledIcon>
        <Typography variant="h6" component="p" align="center" gutterBottom>
          Join our community of lifelong learners and unlock your potential
          today!
        </Typography>
        <Grid container justifyContent="center">
          <CallToAction variant="contained" color="secondary" size="large">
            Start Learning Now
          </CallToAction>
        </Grid>
      </motion.div>
    </VisionMissionWrapper>
  );
};

export default VisionMission;
