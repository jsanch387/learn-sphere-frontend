import { Box, styled } from "@mui/system";
import { Card } from "@mui/material";

export const SuccessStoriesContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: "center",
  backgroundColor: theme.palette.primary.dark, // Use the existing dark color for the background
  color: theme.palette.primary.contrastText,
}));

export const SuccessStoryCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper, // Use the existing paper color for the card
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "& img": {
    borderRadius: "50%",
    width: "150px",
    height: "150px",
    objectFit: "cover",
    marginBottom: theme.spacing(1),
  },
}));
