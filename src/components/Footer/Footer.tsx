// src/components/Footer/Footer.tsx
import React from "react";
import {
  Container,
  Grid,
  Typography,
  Link,
  Box,
  IconButton,
} from "@mui/material";
import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";

const Footer: React.FC = () => {
  return (
    <Box component="footer" bgcolor="primary.main" py={4} color="common.white">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2">
              LearnSphere is an AI-driven educational platform that provides
              personalized learning experiences.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="#" color="inherit" display="block" variant="body2">
              Contact Us
            </Link>
            <Link href="#" color="inherit" display="block" variant="body2">
              Privacy Policy
            </Link>
            <Link href="#" color="inherit" display="block" variant="body2">
              Terms of Service
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Get in Touch
            </Typography>
            <Typography variant="body2">Email: info@learnsphere.com</Typography>
            <Typography variant="body2">Phone: +1 (555) 123-4567</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <IconButton color="inherit" aria-label="Facebook">
              <Facebook />
            </IconButton>
            <IconButton color="inherit" aria-label="Instagram">
              <Instagram />
            </IconButton>
            <IconButton color="inherit" aria-label="Twitter">
              <Twitter />
            </IconButton>
            <IconButton color="inherit" aria-label="LinkedIn">
              <LinkedIn />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
