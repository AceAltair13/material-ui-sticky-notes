import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const Note = (props) => {
    return (
        <Card>
            <CardContent sx={{ bgcolor: props.color }}>
                <Typography
                    variant="h5"
                    component="h2"
                    sx={{ fontFamily: "'Fuzzy Bubbles', cursive" }}
                    gutterBottom
                >
                    {props.title}
                </Typography>
                <Typography
                    variant="body1"
                    sx={{ fontFamily: "'Fuzzy Bubbles', cursive" }}
                >
                    This is a note. This is a note. This is a note.
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Note;
