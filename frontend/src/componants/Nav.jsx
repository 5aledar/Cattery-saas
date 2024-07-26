import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { FaCat, FaPlus } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';

export function Nav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Admin
          </Typography>
          <Tooltip title="Add" arrow>
            <Button color="inherit" variant="outlined" size="large">
              <FaCat className="text-xl" />
              <FaPlus className="text-xl" />
            </Button>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  );
}