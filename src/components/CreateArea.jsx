import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

// text rows should be 1 at default
// title input should be non existent at default
// text area should also be non existent at default DONE
// in the Zoom component, the in prop should be equal to false by default.

function CreateArea({ onAdd }) {
    // Controlled value state for both title and text input
    const [newTitleInput, setNewTitleInput] = useState("");
    const [newTextInput, setNewTextInput] = useState("");
    const [hideTextArea, setHideTextArea] = useState(true);
    const [displayAddButton, setDisplayAddButton] = useState(false);
    const [rowNumber, setRowNumber] = useState("1");

    const handleTitleChange = (event) => {
        const titleInputValue = event.target.value;
        setNewTitleInput(titleInputValue);
    };

    const handleTextChange = (event) => {
        const textInputValue = event.target.value;
        setNewTextInput(textInputValue);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Title: ${newTitleInput} Text: ${newTextInput}`);
        
        // Call the onAdd function if needed
        if (onAdd) {
            onAdd(event, newTitleInput, newTextInput);
        }

        // Clear the inputs after submission
        setNewTitleInput("");
        setNewTextInput("");
    };

    const handleTextAreaVisibility = () => {
        setHideTextArea(false);
        setDisplayAddButton(true);
    }

    const handleTextAreaExpansion = () => {
        setRowNumber("3");
    }

    return (
        <div>
        <form className="create-note" onSubmit={handleSubmit}>
            <input 
                onChange={handleTitleChange} 
                value={newTitleInput} 
                name="title" 
                placeholder="Title" 
                onClick={handleTextAreaVisibility}
            />
            <textarea 
                name="content" 
                placeholder="Take a note..." 
                rows={rowNumber}
                value={newTextInput} 
                onChange={handleTextChange}
                onClick={handleTextAreaExpansion}
                hidden={hideTextArea}
            />
            <Zoom in={displayAddButton}>
                <Fab type="submit">
                    <AddIcon />
                </Fab>
            </Zoom>
        </form>
        </div>
    );
}

export default CreateArea;