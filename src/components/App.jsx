import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    // State for the array of notes
    const [notes, setNotes] = useState([]);

    const addNote = (event, title, text) => {
        event.preventDefault();
        // console.log(`Title: ${title}, Text: ${text}`);
        let id = notes.length;
        const input = {
            id: id + 1,
            title: title,
            content: text
        };
        console.log("Full Input: " + JSON.stringify(input))
        setNotes(prevNotes => [...prevNotes, input]);
    }

    const deleteNote = (id) => {
        //  console.log("delete button clicked!")
        // console.log("The id of the note you're deleting: " + id);
        setNotes((preNotes) => preNotes.filter((note) => note.id !== id));
    }

    return (
    <div>
        <Header />
        <CreateArea onAdd={addNote}/>
        {notes.map((note, index) => (
            <Note key={index} id={note.id} title={note.title} content={note.content} onDelete={deleteNote}/>
        ))}
        <Footer />
    </div>
    );
}

export default App;


// function createNoteCard(note) {
//     return (
//         <Note 
//             title = {note.title} 
//             content= {note.content}
//         />
//     )
// }

// function App () {
//   return (
//     <div>
//         <Header />
//         {notes.map((note) => (
//             <div key={note.key}>
//                 {createNoteCard(note)}
//             </div>
//         ))};
//         <Footer />
//     </div>
//   )
// }

// export default App;