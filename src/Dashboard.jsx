import "./styles/Dashboard.css";
import DashboardHeader from "./components/dashboard-detail";
import MyDrafts from "./components/my-drafts";
import AddNewNote from "./components/add-new-note";
import { useState } from "react";
import noteData from "./data/note-data";
import ExpandNotes from "./components/expand-note";

const Dashboard = ()=>{
    const [notes, setNotes] = useState(noteData);
    const [expandedNote, setExpandedNote] = useState("");
    const [currentNoteId, setCurrentNoteId] = useState("");

    const handleNoteUpdates = (updatedNote)=>{
        const updatedNotes = notes.map(note => 
            note.id === updatedNote.id ? {...note, ...updatedNote} : note
        );
        setNotes(updatedNotes);
    }

    const expandNoteHandler = (e)=>{
        const expandedNote = document.getElementById("note-expanded");
        setCurrentNoteId(e.target.id);
        expandedNote.classList.remove("hidden");
        setExpandedNote(e.target.textContent);
    }

    return(
        <main className="h-screen w-full pt-24 pl-64 pr-5">
            <DashboardHeader />
            <AddNewNote notes={notes} setNotes={setNotes}/>
            <MyDrafts notes={notes} expandEventHandler={expandNoteHandler}/>
            <ExpandNotes notes={expandedNote} noteId={currentNoteId} onUpdateNote={handleNoteUpdates}/>
        </main>
    )
}

export default Dashboard