import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {

  const [notes, setNotes] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  function handleAdd(note) {
    if (editIndex !== null) {
      const updatedNotes = [...notes];
      updatedNotes[editIndex] = note;
      setNotes(updatedNotes);
      setEditIndex(null);
    } else {
      setNotes(prevNotes => {
        return [...prevNotes, note];
      });
    }
  }

  function handleDelete(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });

    // reset edit if deleting same note
    if (editIndex === id) {
      setEditIndex(null);
    }
  }

  function handleEdit(index) {
    setEditIndex(index);
  }

  return (
    <div>
      <Header />

      <CreateArea
        onAdd={handleAdd}
        editNote={editIndex !== null ? notes[editIndex] : null}
      />

      {notes.map((noteItem, index) => (
        <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={handleDelete}
          onEdit={() => handleEdit(index)}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;

