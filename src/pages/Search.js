import React, {useState, useEffect} from 'react';
import API from '../util/API';
import TableShell from '../components/TableHeader';
import SearchBar from '../components/SearchBar';

const url = "https://randomuser.me/api/?results=50";

function Search() {
    const [search,setSearch] = useState('');
    const [results, setResults] = useState(null);
    const [filtered, setFiltered] = useState(null)
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
        console.log(event.target.value)
        setSearch(event.target.value);
    };

    const handleFormSubmit = event => {
        event.preventDefault();
        console.log('searchng for',search)
        ///filter and then setResults
        //setResults(results.filter(element => element.name.first === search));
        //setResults(results.filter(element => element.name.first.includes(search)));
        setFiltered(results.filter(element => element.name.first.includes(search)));
    }

    return (
        <>
        <SearchBar handleInputChange={handleInputChange} search={search} handleFormSubmit={handleFormSubmit}/>
        <TableShell data={filtered}/>
        </>
    );
};

export default Search;

/*
  handleFormSubmit = event => {
    event.preventDefault();
    API.getDogsOfBreed(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };
*/