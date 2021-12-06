import React from "react";
import { Grid } from "@mui/material";
import Note from "./Note";
import colors from "../Constants/colors";

const NoteArea = () => {
    return (
        <Grid container spacing={4} p={3}>
            {colors.map((i) => (
                <Grid item lg={2} md={4} sm={6} xs={12} key={i}>
                    <Note color={i.hex} title={i.name}/>
                </Grid>
            ))}
        </Grid>
    );
};

export default NoteArea;
