import React from "react";
import { Box, Container, Typography } from "@mui/material";
import EmptyImage from "../Assets/Images/empty.svg";

const NoNotes = () => {
    return (
        <Container maxWidth="xs">
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    mt: 6,
                }}
            >
                <img
                    src={EmptyImage}
                    alt="Empty"
                    style={{ height: "auto", width: "100%" }}
                />
                <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ mt: 3 }}
                    textAlign="center"
                >
                    Hover over the (+) icon and click on a color to create a note.
                </Typography>
            </Box>
        </Container>
    );
};

export default NoNotes;
