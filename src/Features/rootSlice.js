import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    notes: JSON.parse(localStorage.getItem("notes")) || [],
    selectedNoteId: "",
    newNoteDialogOpen: false,
    deleteDialogOpen: false,
    color: "",
};

const rootSlice = createSlice({
    name: "root",
    initialState,
    reducers: {
        addNote: (state, action) => {
            state.notes.push(action.payload);
            localStorage.setItem("notes", JSON.stringify(state.notes));
            state.newNoteDialogOpen = false;
        },
        removeNote: (state) => {
            state.notes.splice(
                state.notes.findIndex(
                    (note) => note.id === state.selectedNoteId
                ),
                1
            );
            localStorage.setItem("notes", JSON.stringify(state.notes));
            state.deleteDialogOpen = false;
        },
        openNewNoteDialog: (state, action) => {
            state.newNoteDialogOpen = true;
            state.color = action.payload;
        },
        closeNewNoteDialog: (state) => {
            state.newNoteDialogOpen = false;
        },
        openDeleteDialog: (state, action) => {
            state.selectedNoteId = action.payload;
            state.deleteDialogOpen = true;
        },
        closeDeleteDialog: (state) => {
            state.selectedNoteId = "";
            state.deleteDialogOpen = false;
        },
    },
});

export const {
    addNote,
    removeNote,
    openNewNoteDialog,
    closeNewNoteDialog,
    openDeleteDialog,
    closeDeleteDialog,
} = rootSlice.actions;
export default rootSlice.reducer;
