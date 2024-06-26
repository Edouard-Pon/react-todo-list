import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';

function Footer({ onSearchInput, displayAddTask, saveToLocalStorage }) {
  return (
    <div className="Footer">
      <footer className="Footer-footer">
        <button className="btn-primary" onClick={saveToLocalStorage}>
          <SaveIcon/>
        </button>
        <input
          type="text"
          placeholder="Quick search..."
          onChange={event => onSearchInput(event.target.value)}
        />
        <button className="btn-primary" onClick={displayAddTask}>
          <AddIcon/>
        </button>
      </footer>
    </div>
  );
}

export default Footer;
