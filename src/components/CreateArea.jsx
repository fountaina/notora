import React, { useState } from "react";

function CreateArea({ onAdd }) {
    // Controlled value state for both title and text input
    const [newTitleInput, setNewTitleInput] = useState("");
    const [newTextInput, setNewTextInput] = useState("");

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

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input onChange={handleTitleChange} value={newTitleInput} name="title" placeholder="Title" />
            <textarea name="content" placeholder="Take a note..." rows="3" value={newTextInput} onChange={handleTextChange}/>
            <button type="submit">Add</button>
        </form>
        </div>
    );
}

export default CreateArea;