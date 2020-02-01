import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        
        <div>
            <input 
              type='search' 
              placeholder="Search Robots by Name" 
              onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox