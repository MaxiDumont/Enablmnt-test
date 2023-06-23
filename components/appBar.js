"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import Link from "next/link";

import Image from "next/image";


function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#496692",
        position: "fixed",
        zIndex: 1000,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link href="/">
            <Image
              src="/yourphotos-logo-white.svg"
              width={200}
              height={75}
              priority
              alt="logo"
            />
          </Link>
          <Grid></Grid>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Image
                  src="/placeholder-img.jpg"
                  width={50}
                  height={50}
                  priority
                  className="rounded-full"
                  alt="user"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <Link href="/users/1">
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" sx={{fontFamily: "pt serif"}}>Other users</Typography>
                </MenuItem>
              </Link>

              <Link href="/">
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" sx={{fontFamily: "pt serif"}}>Dashboard</Typography>
                </MenuItem>
              </Link>

            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
