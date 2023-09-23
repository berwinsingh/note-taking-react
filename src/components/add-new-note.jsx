import "../styles/notes.css";
import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import uniqid from "uniqid";


const AddNewNote = ({ notes, setNotes }) => {
  const [value, setValue] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  
  const closePopup = () => {
    const popup = document.getElementById("create-new-note");
    popup.classList.add("hidden");
  };

  useEffect(() => {
    const colorList = [
      "#f7af1ed7",
      "#a71ad6a7",
      "#ed2846c2",
      "#d6591ad8",
      "#4e46e5d8",
    ];
    const generateRandomColor = Math.floor(Math.random() * colorList.length);

    setBackgroundColor(colorList[generateRandomColor]);
  }, [value]);

  const handleNoteContent = (content, delta, source, editor) => {
    const deltaValue = editor.getContents();
    setValue(deltaValue);
  };

  const extractedDeltaValue = (deltaString) => {
    const deltaObj = JSON.parse(deltaString);
    let extractedText = "";

    if (deltaObj.ops && deltaObj.ops.length > 0) {
      for (let op of deltaObj.ops) {
        if (op.insert) {
          extractedText += op.insert;
        }
      }
    }
    return extractedText.trim();
  };

  const addToNoteList = () => {
    if (value === "") {
      const newNoteHeading = document.querySelector("#new-note-heading");
      newNoteHeading.textContent = "Note cannot be empty...";
      newNoteHeading.style.color = "red";

      setTimeout(() => {
        newNoteHeading.textContent = "Add a new note";
        newNoteHeading.style.color = "black";
      }, 2000);
    } 
    else {
      const newNote = {
        id: uniqid(),
        content: extractedDeltaValue(JSON.stringify(value)),
        deltaVal: value,
        color: backgroundColor,
      };

      setNotes((prevNotes) => [...prevNotes, newNote]);
      setValue("");
      closePopup();
    }
  };

  return (
    <div
      className="bg-white w-sub-heading h-96 p-5 rounded-lg fixed flex flex-col gap-2 items-center drop-shadow-md z-50 hidden"
      id="create-new-note"
    >
      <ion-icon
        name="close-outline"
        id="close-icon"
        onClick={closePopup}
      ></ion-icon>
      <h2
        className="font-staatliches text-3xl select-none"
        id="new-note-heading"
      >
        Add a new note
      </h2>
      <ReactQuill
        className="h-52 w-quill-editor"
        theme="snow"
        value={value}
        onChange={handleNoteContent}
      />
      <button
        type="button"
        className="bg-indigo-600 text-white py-1 px-2 rounded-md drop-shadow-md flex items-center gap-1 hover:bg-indigo-700 select-none mt-14"
        onClick={addToNoteList}
      >
        <ion-icon name="add-outline"></ion-icon> Add Note
      </button>
    </div>
  );
};

export default AddNewNote;