import React from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

function GameSearch({handleSearchChanges}) {
    return (
      <div className="search-input">
        
     <TextField
     className="search"
     type="text"
      label="Search Game"
        onChange={(e) => handleSearchChanges(e)}
      />
     <Button id="search-button" variant="contained">Search</Button>
      </div>
    );
  }
  
  export default GameSearch;