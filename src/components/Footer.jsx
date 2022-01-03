import { Box, Container, Link, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
    return (
        <Box component="footer" sx={{ py: 3, px: 2, mt: "auto" }}>
            <Container maxWidth="sm">
                <Typography
                    variant="body2"
                    color="text.secondary"
                    textAlign="center"
                >
                    Made with{" "}
                    <span role="img" aria-label="heart">
                        ❤️
                    </span>{" "}
                    by{" "}
                    <Link
                        href="https://github.com/AceAltair13"
                        underline="hover"
                        color="inherit"
                    >
                        Tirth Thoria.
                    </Link>{" "}
                    Copyright © {new Date().getFullYear()}
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;
