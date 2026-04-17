import React, { useState, useEffect } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { Zoom } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

function CreateArea(props) {

  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  // 🔥 NEW: Prefill when editing
  useEffect(() => {
    if (props.editNote) {
      setNote(props.editNote);
      setExpanded(true);
    }
  }, [props.editNote]);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => ({
      ...prevNote,
      [name]: value
    }));
  }

  function submitNote(event) {
    event.preventDefault();

    if (note.title.trim() === "" && note.content.trim() === "") return;

    props.onAdd(note);

    // reset after add/update
    setNote({
      title: "",
      content: ""
    });

    setExpanded(false);
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        
        
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
      

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />

        <Zoom in={true}>
          <Fab onClick={submitNote}
          style={{ backgroundColor: props.editNote ? "#ffffff" : "#f48516" }}>

            <AddIcon />
          </Fab>
        </Zoom>

      </form>
    </div>
  );
}

export default CreateArea;