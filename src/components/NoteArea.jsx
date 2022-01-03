import React from "react";
import { Box, Grid, Toolbar } from "@mui/material";
import Note from "./Note";
import { useSelector } from "react-redux";
import BackgroundImage from "../Assets/Images/background.png";
import NoNotes from "./NoNotes";
import Footer from "./Footer";

const NoteArea = () => {
    const allNotes = useSelector((state) => state.notes);

    return (
        <Box
            sx={{
                bgcolor: "#f8efd4",
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
                backgroundImage: `url(${BackgroundImage})`,
            }}
        >
            <Toolbar />
            {allNotes.length === 0 ? (
                <NoNotes />
            ) : (
                <Grid container spacing={3} p={2}>
                    {allNotes.map((note) => (
                        <Grid item xs={12} sm={6} md={4} lg={2} key={note.id}>
                            <Note {...note} />
                        </Grid>
                    ))}
                </Grid>
            )}
            <Footer />
        </Box>
    );
};

export default NoteArea;
