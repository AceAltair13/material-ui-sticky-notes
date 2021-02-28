import React from "react";
import {
    Fab,
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    Button,
    DialogActions,
} from "@material-ui/core";
import { Add, Note } from "@material-ui/icons";

function AddNote(props) {
    const [open, setOpen] = React.useState(false);
    const [note, setNote] = React.useState({ title: "", content: "" });
    const [disableCreate, setDisableCreate] = React.useState(true);

    React.useEffect(() => {
        setDisableCreate(note.title === "" || note.content === "");
    }, [note]);

    const handleClose = () => {
        setOpen(false);
        setNote({ title: "", content: "" });
    };

    const handleOpen = () => {
        setOpen(true);
    };

    function createNote() {
        props.onCreate(note);
        setNote({
            title: "",
            content: "",
        });
        setOpen(false);
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setNote((prevNote) => ({ ...prevNote, [name]: value }));
    }

    const fabStyle = {
        margin: 0,
        top: "auto",
        right: 20,
        bottom: 20,
        left: "auto",
        position: "fixed",
        backgroundColor: "#d7385e",
    };

    return (
        <div>
            <Fab style={fabStyle} onClick={handleOpen}>
                <Add style={{ color: "white" }} />
            </Fab>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle
                    id="form-dialog-title"
                    style={{ backgroundColor: "#f8efd4" }}
                >
                    <Note
                        style={{
                            transform: "translate(0, 5px) rotate(-90deg)",
                            color: "#132743",
                        }}
                    />{" "}
                    New Note
                </DialogTitle>
                <DialogContent style={{ backgroundColor: "#f8efd4" }}>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="title"
                        label="Title"
                        type="text"
                        onChange={handleChange}
                        value={note.title}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        name="content"
                        label="Content"
                        type="text"
                        onChange={handleChange}
                        value={note.content}
                        fullWidth
                        multiline
                    />
                </DialogContent>
                <DialogActions style={{ backgroundColor: "#f8efd4" }}>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button
                        color="primary"
                        onClick={createNote}
                        disabled={disableCreate}
                    >
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AddNote;
