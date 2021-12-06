import { AppBar, Toolbar, Typography } from "@mui/material";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import React from "react";

const Navbar = () => {
    return (
        <AppBar position="sticky" color="secondary">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    <StickyNote2Icon sx={{mb: "-5px", mr: 1}}/>
                    Sticky Notes
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
