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
  InnerContainer,
} from "./VisionMission.styles";
import { useInView } from "react-intersection-observer";

const VisionMission: React.FC = () => {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <VisionMissionWrapper>
      <InnerContainer ref={inViewRef}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h4"
            component="h2"
            align="center"
            gutterBottom
            pb={5}
          >
            Empowering Learners Worldwide
          </Typography>
        </motion.div>
        <Grid container spacing={4} maxWidth="none" justifyContent="center">
          <Grid item xs={12} sm={6}>
            <StyledIcon>
              <VisionIcon fontSize="inherit" />
            </StyledIcon>
            <StatementContainer item xs={12}>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <Typography variant="h4" component="h2">
                  Our Vision
                </Typography>
              </motion.div>
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
          <Grid item xs={12} sm={6}>
            <StyledIcon>
              <MissionIcon fontSize="inherit" />
            </StyledIcon>
            <StatementContainer item xs={12}>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <Typography variant="h4" component="h2">
                  Our Mission
                </Typography>
              </motion.div>
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
          <LearningIcon fontSize="inherit" />
          <PeopleIcon fontSize="inherit" />
        </StyledIcon>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Typography variant="h6" component="p" align="center" gutterBottom>
            Join our community of lifelong learners and unlock your potential
            today!
          </Typography>
        </motion.div>
        <Grid container justifyContent="center">
          <CallToAction variant="contained" color="secondary" size="large">
            Start Learning Now
          </CallToAction>
        </Grid>
      </InnerContainer>
    </VisionMissionWrapper>
  );
};

export default VisionMission;
