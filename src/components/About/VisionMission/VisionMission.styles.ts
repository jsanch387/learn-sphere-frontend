import { Container, styled } from "@mui/system";
import { Box, Button, Grid } from "@mui/material";

export const VisionMissionWrapper = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(6),
  color: theme.palette.primary.contrastText,
  background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.light} 100%)`,
  width: "100%",
  display: "flex",
  justifyContent: "center",
}));

export const InnerContainer = styled(Container)(({ theme }) => ({
  "& h1": {
    marginBottom: theme.spacing(4),
  },
}));

export const StyledIcon = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: theme.palette.secondary.main,
  marginBottom: theme.spacing(4),
  "& svg": {
    fontSize: "4rem",
    marginRight: theme.spacing(1),
  },
}));

export const StatementContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(2),
  textAlign: "center",
  "& h2": {
    marginBottom: theme.spacing(5),
    fontWeight: "bold",
  },
}));

export const StatementList = styled("ul")(({ theme }) => ({
  marginTop: 0,
  marginBottom: theme.spacing(4),
  paddingLeft: theme.spacing(4),
  paddingRight: theme.spacing(2),
  textAlign: "left",
  "& li": {
    marginBottom: theme.spacing(2),
  },
  "& h4": {
    marginBottom: theme.spacing(2),
  },
  "&:first-child": {
    marginTop: theme.spacing(4),
  },
}));

export const CallToAction = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(4),
  alignSelf: "center",
}));
