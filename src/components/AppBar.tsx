import React from "react";
import { Link } from "react-router-dom";
import LanguagesSelcet from "./LanguagesSelect";
import LocalFireDepartmentTwoToneIcon from "@mui/icons-material/LocalFireDepartmentTwoTone";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import translations from "../translations";

export default function AppBarheader({ handleLang, lang }: any) {
  const key = lang as string;
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LocalFireDepartmentTwoToneIcon
            sx={{
              color: "red",
              fontSize: "2rem",
              display: { xs: "none", md: "flex" },
              mr: 1,
            }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 4,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            TheBlog
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem key="home">
                <Link to="/">
                  {translations.home[key as keyof typeof translations.home]}
                </Link>
              </MenuItem>
              <MenuItem key="blog">
                <Link to="/blog">
                  {translations.blog[key as keyof typeof translations.blog]}
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          <LocalFireDepartmentTwoToneIcon
            sx={{
              color: "red",
              fontSize: "2rem",
              display: { xs: "flex", md: "none" },
              mr: 1,
            }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            TheBlog
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              <Link style={{ color: "#fff", textDecoration: "none" }} to="/">
                {translations.home[key as keyof typeof translations.home]}
              </Link>
            </Button>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              <Link
                style={{ color: "#fff", textDecoration: "none" }}
                to="/blog"
              >
                {translations.blog[key as keyof typeof translations.blog]}
              </Link>
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <LanguagesSelcet handleLang={handleLang} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
