import { Card, Grid } from "@mui/material";
import { styled } from "@mui/system";

export const FeaturedCoursesContainer = styled("div")(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: "center",
}));

export const CourseCard = styled(Card)(({ theme }) => ({
  maxWidth: "345px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  minHeight: "100%",
}));

export const DescriptionContainer = styled("div")({
  minHeight: "80px",
  maxHeight: "80px",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export const GridItem = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));
