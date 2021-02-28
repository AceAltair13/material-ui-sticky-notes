import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Note from "./Note";
import AddNote from "./AddNote";
import EmptyNoteSVG from "./nodata.svg";

function Notes() {
    const [notes, addNote] = React.useState([]);

    function addNewNote(newNote) {
        addNote((prevNotes) => [...prevNotes, newNote]);
    }

    function deleteNote(id) {
        addNote((prevNotes) => prevNotes.filter((_, index) => index !== id));
    }

    return (
        <div
            style={{
                margin: "20px",
            }}
        >
            {notes[0] ? (
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                    spacing={4}
                >
                    {notes.map((note, index) => (
                        <Note
                            id={index}
                            key={index}
                            title={note.title}
                            content={note.content}
                            onDelete={deleteNote}
                        />
                    ))}
                </Grid>
            ) : (
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    style={{marginTop: "20vh"}}
                >
                    <Grid item>
                        <img src={EmptyNoteSVG} alt="No Notes" height="150px" />
                    </Grid>
                    <Grid item style={{textAlign: "center"}}>
                        <Typography
                            variant="h6"
                            color="textSecondary"
                            style={{ marginTop: "20px" }}
                        >
                            Click on the (+) Button
                        </Typography>
                        <Typography
                            variant="h6"
                            color="textSecondary"
                        >
                            to add Notes.
                        </Typography>
                    </Grid>
                </Grid>
            )}
            <AddNote onCreate={addNewNote} />
        </div>
    );
}

export default Notes;
