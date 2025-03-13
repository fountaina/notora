import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const Note = ({ id, title, content, onDelete}) => {
  
  const handleClick = () => {
    if (onDelete) {
      onDelete(id);
    }
  }
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      {/* <button onClick={handleClick}><img src="/images/delete2.svg" alt="delete" /></button> */}
      {/* <img onClick={handleClick} src="/images/delete2.svg" alt="delete" /> */}
      <button onClick={handleClick}><DeleteIcon /></button>
    </div>
  );
};

export default Note;