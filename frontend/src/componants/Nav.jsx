import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { PiCatFill } from "react-icons/pi";
import Tooltip from "@mui/material/Tooltip";
import { FaPlus } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
export function Nav() {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Admin
          </Typography>
        
        <div className="w-1/3 flex gap-4 items-center">
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
        </Toolbar>
        
      </AppBar>
    </Box>
  );
}