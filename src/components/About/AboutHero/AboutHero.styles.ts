import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const AboutHeroContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: `url('https://source.unsplash.com/random/1600x900?ai,technology') no-repeat center center fixed`,
  backgroundSize: "cover",
}));

export const AboutHeadline = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "3rem",
  lineHeight: 1.2,
  marginBottom: theme.spacing(2),
  color: "#FFFFFF",
}));

export const AboutSubheading = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: "1.75rem",
  lineHeight: 1.5,
  marginBottom: theme.spacing(4),
  color: "#FFFFFF",
}));
