import React from "react";
import {
    Card,
    CardActions,
    CardContent,
    IconButton,
    Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { openDeleteDialog } from "../Features/rootSlice";

const Note = (props) => {
    const dispatch = useDispatch();

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
                    {props.content}
                </Typography>
            </CardContent>
            <CardActions sx={{ bgcolor: props.color }}>
                <Box flexGrow={1} />
                <IconButton
                    onClick={() => {
                        dispatch(openDeleteDialog(props.id));
                    }}
                >
                    <DeleteIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default Note;
