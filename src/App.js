import React from "react";
import { CssBaseline } from "@mui/material";
import Navbar from "./Components/Navbar";
import FAB from "./Components/FAB";
import NoteArea from "./Components/NoteArea";

function App() {
    return (
        <>
            <CssBaseline />
            <Navbar />
            <NoteArea />
            <FAB />
        </>
    );
}

export default App;
