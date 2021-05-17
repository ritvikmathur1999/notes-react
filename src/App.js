import { useState, useEffect } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

function App() {
  // eslint-disable-next-line
  const date = new Date();
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Welcome to Notes App! Use this app to save your notes. Just start typing in the teal box.",
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString(),
    },
  ]);

  const [searchText, SetSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem("react-notes-apps-data")
    );

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-apps-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode && `dark-mode`}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        {/* <h1 className="heading">Notes</h1> */}
        <Search handleSearchNote={SetSearchText} />
        <div className="card-container">
          <NotesList
            notes={notes.filter((note) =>
              note.text.toLowerCase().includes(searchText)
            )}
            handleAddNote={addNote}
            handleDeleteNote={deleteNote}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
