import Header from "./components/Header"
import Dashboard from "./Dashboard"


const addNoteDisplay = ()=>{
  const newNotePopup = document.getElementById("create-new-note");
  newNotePopup.classList.toggle("hidden");
}

const App = ()=>{
  return (
    <>
      <Header newNoteHandler={addNoteDisplay}/>
      <Dashboard />
    </>
  )
}

export default App