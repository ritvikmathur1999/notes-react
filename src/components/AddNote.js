import { useState } from "react";
import { MdAddBox } from "react-icons/md";
const AddNote = ({ handleAddNote }) => {
  const characterLimit = 200;
  const [noteText, setNoteText] = useState("");

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };
  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };

  return (
    <div className="card-template addnote">
      <textarea
        className="addNote-text"
        cols="10"
        rows="8"
        placeholder="Type a new note..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="footer">
        <small>{characterLimit - noteText.length} remaining</small>
        <MdAddBox onClick={handleSaveClick} className="save" />
      </div>
    </div>
  );
};

export default AddNote;
