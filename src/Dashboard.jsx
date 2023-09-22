import "./styles/Dashboard.css";
import DashboardHeader from "./components/dashboard-detail";
import MyDrafts from "./components/my-drafts";
import AddNewNote from "./components/add-new-note";
import { useState } from "react";
import noteData from "./data/note-data";

const Dashboard = ()=>{
    const [notes, setNotes] = useState(noteData);

    return(
        <main className="h-screen w-full pt-24 pl-64 pr-5">
            <DashboardHeader />
            <AddNewNote notes={notes} setNotes={setNotes}/>
            <MyDrafts notes={notes}/>
        </main>
    )
}

export default Dashboard