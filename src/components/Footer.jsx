import React from "react";
import { Typography, Link, Container } from "@material-ui/core";

function Footer() {
    return (
        <footer className="footer">
        <Container maxWidth="sm" style={{marginBottom: "10px"}}>
            <Typography variant="body2" color="textSecondary" align="center">
                {"Created by "}
                <Link color="inherit" href="https://github.com/AceAltair13">
                    Tirth Thoria
                </Link>{" "}
                {new Date().getFullYear()}
                {"."}
            </Typography>
        </Container>
        </footer>
    );
}

export default Footer;
