import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Note } from "@material-ui/icons";
import React from "react";

function Navbar() {
    return (
        <div>
            <AppBar position="static" style={{ backgroundColor: "#132743" }}>
                <Toolbar>
                    <Note style={{transform: "rotate(-90deg)", color: "#d7385e"}}/>
                    <Typography variant="h6" style={{marginLeft: "4px"}}>Sticky Notes</Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;
