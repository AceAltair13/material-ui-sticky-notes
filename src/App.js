import React from "react";
import { CssBaseline } from "@mui/material";
import Navbar from "./Components/Navbar";
import FAB from "./Components/FAB";
import NoteArea from "./Components/NoteArea";
import InputDialog from "./Components/InputDialog";
import DeleteDialog from "./Components/DeleteDialog";

function App() {
    return (
        <>
            <CssBaseline />
            <Navbar />
            <NoteArea />
            <FAB />
            <InputDialog />
            <DeleteDialog />
        </>
    );
}

export default App;
