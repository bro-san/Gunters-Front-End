import React from 'react'

function GameSearch({handleSearchChanges}) {
    return (
      <>
     <input
     type="text"
        placeholder="Search Games"
        onChange={(e) => handleSearchChange(e)}
      />
     <button>Search</button>
      </>
    );
  }
  
  export default GameSearch;