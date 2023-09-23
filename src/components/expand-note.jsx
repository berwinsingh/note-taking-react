import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../styles/notes.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const ExpandNotes = ({ notes, onUpdateNote, noteId }) => {
  const [readOnly, setReadOnly] = useState(true);
  const [selectedNote, setSelectedNote] = useState("");

  useEffect(() => {
    setSelectedNote(notes);
  }, [notes]);

  const handleContentChange = (content) => {
    setSelectedNote(content);
  };

  const handleConfirmEdit = () => {
    const updatedNote = {
      id: noteId,
      content: selectedNote,
    };

    onUpdateNote(updatedNote);

    const confirmEdit = document.getElementById("confirm-edit-btn");
    confirmEdit.classList.add("hidden");

    const popup = document.getElementById("note-expanded");
    popup.classList.add("hidden");
    setReadOnly(true);
  };

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
            const confirmEdit = document.getElementById("confirm-edit-btn");
            confirmEdit.classList.add("hidden");
            popup.classList.add("hidden");
            setReadOnly(false);
          }}
        ></ion-icon>
        <h2 className="font-staatliches text-3xl self-center">Your Note</h2>

        <ReactQuill
          className="h-52 w-quill-editor"
          theme="snow"
          value={selectedNote}
          readOnly={readOnly}
          onChange={handleContentChange}
        />
        <div
          id="buttons-interaction"
          className="flex mt-12 gap-5 w-full justify-center"
        >
          <button
            type="button"
            className="bg-indigo-600 text-white py-1 px-2 rounded-md drop-shadow-md flex items-center gap-1 hover:bg-indigo-700 select-none"
            onClick={() => {
              setReadOnly(false);
              const confirmEdit = document.getElementById("confirm-edit-btn");
              confirmEdit.classList.remove("hidden");
            }}
          >
            Edit Note
          </button>

          <button
            type="button"
            id="confirm-edit-btn"
            className="bg-green-600 hover:bg-green-700 hidden text-white py-1 px-2 rounded-md drop-shadow-md flex items-center gap-1 select-none"
            onClick={handleConfirmEdit}
          >
            Confirm Edit
          </button>
        </div>
      </div>
    </>
  );
};

ExpandNotes.propTypes = {
  notes: PropTypes.string,
  noteId: PropTypes.string,
  onUpdateNote: PropTypes.func,
};

export default ExpandNotes;