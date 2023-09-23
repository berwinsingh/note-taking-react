import { useState } from 'react';
import PropTypes from "prop-types";
import "../styles/notes.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const ExpandNotes = ({ notes }) => {
    const [readOnly, setReadonly] = useState(true);
    // const [selectedNote, setSelectedNote] = useState(notes);

  return (
    <>
      <div
        id="note-expanded"
        className="bg-white w-sub-heading h-96 p-5 rounded-lg fixed flex flex-col gap-2 hidden items-start drop-shadow-md z-50"
      >
        <ion-icon
          name="close-outline"
          id="close-popup"
          onClick={() => {
            const popup = document.getElementById("note-expanded");
            popup.classList.add("hidden");
          }}
        ></ion-icon>
        <h2 className="font-staatliches text-3xl self-center">Your Note</h2>
        <ReactQuill
          className="h-52 w-quill-editor"
          theme="snow"
          value={notes}
          readOnly={readOnly}
        //   onChange={setSelectedNote}
        />
        <button
          type="button"
          className="bg-indigo-600 text-white py-1 px-2 rounded-md drop-shadow-md flex items-center gap-1 hover:bg-indigo-700 select-none self-center mt-12"
          onClick={() => {
            setReadonly(!readOnly);
          }}
        >
          Edit Note
        </button>
      </div>
    </>
  );
};

ExpandNotes.propTypes = {
  notes: PropTypes.string,
};

export default ExpandNotes;
