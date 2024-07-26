import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { PiCatFill } from "react-icons/pi";
import { FaPlus } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { Tooltip } from "@mui/material";
import { AiOutlineMenu } from "react-icons/ai";

export function Nav() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
             <div className="text-3xl">Admin</div>
          </Typography>
          <div className="hidden sm:flex w-1/3 gap-4 items-center">
            <Link to="/">
              <Button
                className="flex gap-2"
                color="inherit"
                variant="outlined"
                size="large"
              >
                Home
              </Button>
            </Link>

            <Link to="/ResourceCalculator">
              <Button
                className="flex gap-2"
                color="inherit"
                variant="outlined"
                size="large"
              >
                Warehouse
              </Button>
            </Link>

            {currentPath === "/dashboard" ? (
              <Tooltip title="Add" arrow>
                <Link to="/add">
                  <Button
                    className="flex gap-2"
                    color="inherit"
                    variant="outlined"
                    size="large"
                  >
                    <PiCatFill className="text-xl" />
                    <FaPlus className="text-xl" />
                  </Button>
                </Link>
              </Tooltip>
            ) : (
              <Link to="/dashboard">
                <Button
                  className="flex gap-2"
                  color="inherit"
                  variant="outlined"
                  size="large"
                >
                  dashboard
                </Button>
              </Link>
            )}
          </div>
          <div className="flex sm:hidden">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
            >
              <AiOutlineMenu />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>
                <Link to="/" className="w-full text-left">Home</Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link to="/ResourceCalculator" className="w-full text-left">Warehouse</Link>
              </MenuItem>
              {currentPath === "/dashboard" ? (
                <MenuItem onClick={handleMenuClose}>
                  <Link to="/add" className="w-full text-left">Add</Link>
                </MenuItem>
              ) : (
                <MenuItem onClick={handleMenuClose}>
                  <Link to="/dashboard" className="w-full text-left">Dashboard</Link>
                </MenuItem>
              )}
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Box sx={{ mt: 5 }} />
    </Box>
  );
}
