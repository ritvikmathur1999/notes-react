import AddNote from "./AddNote";
import Notes from "./Notes";

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className="note-list">
      {notes.map((notes) => (
        <Notes
          id={notes.id}
          text={notes.text}
          date={notes.date}
          time={notes.time}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NotesList;
