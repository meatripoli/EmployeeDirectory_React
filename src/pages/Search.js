import React, {useState, useEffect} from 'react';
import API from '../util/API';
import TableShell from '../components/TableHeader';
import SearchBar from '../components/SearchBar';

const url = "https://randomuser.me/api/?results=500";

function Search() {
    const [search,setSearch] = useState('');
    const [results, setResults] = useState(null);
    const [filtered, setFiltered] = useState(null);
    const [sortClass,setSortClass] = useState("sortable desc");
    //loads data initially
    useEffect(() => {
        API.top50Results(url)
        .then(res => {
          setResults(res.data.results);
          setFiltered(res.data.results);
        })
        .catch(err => console.log('Error:',err))
    },[]);

    const handleInputChange = event =>{
        setSearch(event.target.value);
    };

    const handleFormSubmit = event => {
        event.preventDefault();
        ///filter and then setResults
        setFiltered(results.filter(element => element.name.first.includes(search)));
    }

    const handleSort = event => {
      event.preventDefault();
      if(sortClass === "sortable desc"){
        setSortClass("sortable asc");
        filtered.sort((a, b) => (a.name.first < b.name.first) ? 1 : -1);
        console.log(filtered.sort((a, b) => (a.name.first < b.name.first) ? 1 : -1))
      }
      else if(sortClass === "sortable asc"){
        setSortClass("sortable desc");
        filtered.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1);
        console.log(filtered.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1))
      }
    };

    return (
        <>
        <SearchBar handleInputChange={handleInputChange} search={search} handleFormSubmit={handleFormSubmit}/>
        <TableShell data={filtered} sortClass={sortClass} handleSort={handleSort}/>
        </>
    );
};

export default Search;