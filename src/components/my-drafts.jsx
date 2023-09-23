import "../styles/Dashboard.css";
import PropTypes from "prop-types";

const MyDrafts = ({ notes, expandEventHandler }) => {
    return (
      <div className="mt-8">
        <h3 className="font-staatliches text-3xl">My Drafts</h3>
        <div id="notes" className="flex items-start flex-wrap gap-2">
          {notes.map((note) => (
            <div
              key={note.id}
              className="text-white w-56 flex flex-wrap gap-2 mt-2 h-60 rounded-md justify-center p-3 overflow-hidden items-start cursor-pointer"
              style={{ backgroundColor: note.color }}
              onClick={expandEventHandler}
            >
              <p className="text-md leading-tight overflow-hidden select-none">
                {note.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };

MyDrafts.propTypes = {
  notes: PropTypes.array,
  expandEventHandler: PropTypes.func,
};

export default MyDrafts;