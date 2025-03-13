import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

// text rows should be 1 at default
// title input should be non existent at default
// text area should also be non existent at default DONE
// in the Zoom component, the in prop should be equal to false by default.

function CreateArea({ onAdd }) {
    //State for adding notes
    const [noteInput, setNoteInput] = useState({title: "", content: ""});

    // State for text box expansion
    const [isExpand, setIsExpand] = useState(false);

    function expand() {
        setIsExpand(true);
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setNoteInput((prevInput) => ({
            ...prevInput,
            [name]: value
        }))
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Title: ${noteInput.title} Text: ${noteInput.content}`);
        
        // Call the onAdd function if needed
        if (onAdd) {
            onAdd(event, noteInput.title, noteInput.content);
        }

        // Clear the inputs after submission
        setNoteInput({title: "", content: ""});
    };

    return (
        <div>
        <form className="create-note" onSubmit={handleSubmit}>
            <input 
                onChange={handleChange} 
                value={noteInput.title} 
                name="title" 
                placeholder="Title" 
                onClick={expand}
            />
            {
                isExpand ? 
                <textarea 
                name="content" 
                placeholder="Take a note..." 
                rows={noteInput.content.length > 33 ? "3" : null}
                value={noteInput.content} 
                onChange={handleChange}
                />
                : null
            }
            <Zoom in={isExpand}>
                <Fab type="submit">
                    <AddIcon />
                </Fab>
            </Zoom>
        </form>
        </div>
    );
}

export default CreateArea;