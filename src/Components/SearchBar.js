import React from 'react';

function SearchBar(prop) {
    return (
        <form className="form-inline my-2 my-lg-0">
            <input 
                className="form-control mr-sm-2" 
                type="search" 
                placeholder="Search Employee Name" 
                aria-label="Search"
                id="name"
                value={prop.search} 
                onChange={prop.handleInputChange}
            />
            <button className="btn btn-success" type="submit" onClick={prop.handleFormSubmit}>
                Search
            </button>
        </form> 
    ); 
};

export default SearchBar;