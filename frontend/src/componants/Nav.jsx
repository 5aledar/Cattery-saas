import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import { PiCatFill } from "react-icons/pi";
import Tooltip from "@mui/material/Tooltip";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
export function Nav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Admin
          </Typography>
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
        </Toolbar>
      </AppBar>
    </Box>
  );
}
