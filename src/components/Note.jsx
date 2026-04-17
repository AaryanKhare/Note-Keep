import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Note(props){

    function handleDelete(){
        props.onDelete(props.id);
    }

    function handleEdit(){
        props.onEdit();  // triggers edit from App.jsx
    }

    return(
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>

            <button onClick={handleEdit}>
                <EditIcon />
            </button>

            <button onClick={handleDelete}>
                <DeleteIcon />
            </button>
        </div>
    )
}

export default Note;
