import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
} from "@mui/material";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addNote, closeNewNoteDialog } from "../Features/rootSlice";

const InputDialog = () => {
    const dispatch = useDispatch();
    const { color, newNoteDialogOpen } = useSelector((state) => state);
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm({
        resolver: yupResolver(
            yup.object().shape({
                title: yup.string().required("Title is required"),
                content: yup.string().required("Content is required"),
            })
        ),
    });

    useEffect(() => {
        if (!newNoteDialogOpen) {
            reset();
        }
    }, [newNoteDialogOpen, reset]);

    const onSubmit = (data) => {
        console.log({ ...data, color });
        dispatch(addNote({ ...data, color, id: Date.now() }));
    };

    return (
        <Dialog
            open={newNoteDialogOpen}
            fullWidth
            maxWidth="xs"
            onClose={() => dispatch(closeNewNoteDialog())}
            component="form"
            onSubmit={handleSubmit(onSubmit)}
        >
            <DialogTitle sx={{ background: color }}>Create Note</DialogTitle>
            <DialogContent sx={{ background: color }}>
                <TextField
                    autoFocus
                    id="title"
                    name="title"
                    label="Title"
                    type="text"
                    fullWidth
                    variant="standard"
                    {...register("title")}
                    error={!!errors.title}
                    helperText={errors.title && errors.title.message}
                    sx={{ mb: 1 }}
                />
                <TextField
                    id="content"
                    name="content"
                    label="Content"
                    type="text"
                    fullWidth
                    variant="standard"
                    {...register("content")}
                    error={!!errors.content}
                    helperText={errors.content && errors.content.message}
                />
            </DialogContent>
            <DialogActions sx={{ background: color }}>
                <Button onClick={() => dispatch(closeNewNoteDialog())}>
                    Cancel
                </Button>
                <Button type="submit">Create</Button>
            </DialogActions>
        </Dialog>
    );
};

export default InputDialog;
