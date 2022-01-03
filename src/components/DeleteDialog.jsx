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
import { useSnackbar } from "notistack";

const DeleteDialog = () => {
    const dispatch = useDispatch();
    const { deleteDialogOpen } = useSelector((state) => state);
    const { enqueueSnackbar } = useSnackbar();

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
                <Button
                    onClick={() => {
                        dispatch(removeNote());
                        enqueueSnackbar("Note deleted successfully", {
                            variant: "success",
                        });
                    }}
                >
                    Yes
                </Button>
                <Button onClick={() => dispatch(closeDeleteDialog())}>
                    No
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default DeleteDialog;
