import { React } from "react";
import {
    Card,
    Grid,
    CardContent,
    Typography,
    CardActions,
    IconButton,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";

function Note(props) {
    const noteStyle = {
        backgroundColor: "#edc988",
    };

    function deleteNote(){
        props.onDelete(props.id);
    }

    return (
        <Grid item lg={2} md={4} sm={6} xs={12}>
            <Card style={noteStyle}>
                <CardContent>
                    <Typography gutterBottom>{props.title}</Typography>
                    <Typography variant="body2" component="p">
                        {props.content}
                    </Typography>
                </CardContent>
                <CardActions
                    style={{ display: "flex", justifyContent: "flex-end" }}
                >
                    <IconButton onClick={deleteNote}>
                        <Delete id="delete-button" color="disabled"/>
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default Note;
