import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  MenuItem,
  Menu,
} from "@mui/material";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import theme from "../../theme/theme";
import { Link } from "react-router-dom";

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  marginRight: theme.spacing(2),
  cursor: "pointer",
  transition: "all 0.3s",
  "&:hover": {
    transform: "scale(1.1)",
  },
}));

const StyledLoginButton = styled(Button)(({ theme }) => ({
  color: theme.palette.secondary.main,
  borderColor: theme.palette.secondary.main,
  marginRight: theme.spacing(2),
}));

const StyledSignUpButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.secondary.main,
}));

const NavBar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        height: "80px",
        backgroundColor: theme.palette.primary.main,
        pt: 1,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", minHeight: "80px" }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            color: theme.palette.primary.contrastText,
            display: "flex",
            alignItems: "center",
          }}
        >
          LearnSphere
        </Typography>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <StyledButton variant="text" theme={theme}>
              Home
            </StyledButton>
          </Link>
          <StyledButton variant="text" theme={theme}>
            Courses
          </StyledButton>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <StyledButton variant="text" theme={theme}>
              About
            </StyledButton>
          </Link>
          <StyledButton variant="text" theme={theme}>
            Contact
          </StyledButton>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
          }}
        >
          <StyledLoginButton variant="outlined" theme={theme}>
            Login
          </StyledLoginButton>
          <StyledSignUpButton variant="contained" theme={theme}>
            Sign Up
          </StyledSignUpButton>
        </Box>
        <Box
          sx={{
            display: { xs: "flex", sm: "none" },
            alignItems: "center",
          }}
        >
          <IconButton
            size="large"
            edge="end"
            color="secondary"
            aria-label="menu"
            aria-controls="basic-menu"
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose} component={Link} to="/">
              Home
            </MenuItem>
            <MenuItem onClick={handleClose}>Courses</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to="/about">
              About
            </MenuItem>
            <MenuItem onClick={handleClose}>Contact</MenuItem>
            <MenuItem onClick={handleClose}>Login</MenuItem>
            <MenuItem onClick={handleClose}>Sign Up</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
