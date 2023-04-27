import { Box, styled } from "@mui/system";
import { Card } from "@mui/material";

export const PersonalizedLearningContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: "center",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
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
  minHeight: "280px",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: `20px 20px 50px rgba(0, 0, 0, 0.6), -20px -20px 50px rgba(255, 255, 255, 0.3)`,
  },
}));
