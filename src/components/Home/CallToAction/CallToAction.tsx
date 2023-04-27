import React from "react";
import { Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CallToActionContainer } from "./CallToAction.styles";

const CallToAction: React.FC = () => {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <CallToActionContainer ref={inViewRef}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <Typography variant="h4" component="h2" gutterBottom>
          Discover the Future of Learning Today
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Typography variant="body1" paragraph>
          Join LearnSphere and unlock the full potential of personalized,
          AI-driven education.
        </Typography>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 1, delay: 1 }}
      >
        <Button variant="contained" color="primary" size="large">
          Get Started
        </Button>
      </motion.div>
    </CallToActionContainer>
  );
};

export default CallToAction;
