import { Button, Card, Grid, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";

export const HeroContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  overflow: "hidden",
  "&::before, &::after": {
    content: "''",
    position: "absolute",
    top: "-10%",
    bottom: "-10%",
    left: "-10%",
    right: "-10%",
    background: `linear-gradient(to bottom, ${theme.palette.secondary.dark} 0%, ${theme.palette.primary.light} 100%)`,
    transform: "rotate(45deg)",
    transformOrigin: "center",
    borderRadius: "50%",
    zIndex: -1,
  },
  "&::after": {
    top: "-20%",
    bottom: "-20%",
    left: "-20%",
    right: "-20%",
    background: `linear-gradient(to bottom, ${theme.palette.secondary.main} 0%, ${theme.palette.primary.light} 100%)`,
    borderRadius: "20%",
  },
}));

export const Headline = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "3rem",
  lineHeight: 1.2,
  marginBottom: theme.spacing(2),
}));

export const Subheading = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: "1.75rem",
  lineHeight: 1.5,
  marginBottom: theme.spacing(4),
}));

export const FeatureCard = styled(Card)(({ theme }) => ({
  background: `rgba(255, 255, 255, 0.15)`,
  boxShadow: `20px 20px 50px rgba(0, 0, 0, 0.3), -20px -20px 50px rgba(255, 255, 255, 0.1)`,
  borderRadius: `20px`,
  padding: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  margin: theme.spacing(2),
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: `20px 20px 50px rgba(0, 0, 0, 0.6), -20px -20px 50px rgba(255, 255, 255, 0.3)`,
  },
}));

export const FeatureIconContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginBottom: theme.spacing(1),
}));

export const CTAButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(4),
  fontSize: "1.5rem",
}));

export const FeatureGrid = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(6),
}));
