import { AiFillDelete } from "react-icons/ai";

const Notes = ({ id, text, date, time, handleDeleteNote }) => {
  return (
    <div className="card-template">
      <span className="note-text">
        <b>{text}</b>
      </span>
      <div className="footer date">
        <small id="note-footer">
          Last edited on<br></br>
          {time} {date}
        </small>
        {/* <button className="button-settings"> */}
        <AiFillDelete
          onClick={() => handleDeleteNote(id)}
          className="delete-icon"
          size="1.8em"
        />
        {/* </button> */}
      </div>
    </div>
  );
};

export default Notes;
