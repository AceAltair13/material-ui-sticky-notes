import React from "react";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { closeDeleteDialog, removeNote } from "../Features/rootSlice";

const DeleteDialog = () => {
    const dispatch = useDispatch();
    const { deleteDialogOpen } = useSelector((state) => state);

    return (
        <Dialog
            open={deleteDialogOpen}
            fullWidth
            maxWidth="xs"
            onClose={() => dispatch(closeDeleteDialog())}
        >
            <DialogTitle>Delete this note?</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    This action is not reversible.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => dispatch(removeNote())}>Yes</Button>
                <Button onClick={() => dispatch(closeDeleteDialog())}>
                    No
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default DeleteDialog;
