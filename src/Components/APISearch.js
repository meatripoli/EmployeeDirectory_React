import React,{useState, useEffect} from 'react';
import axios from "axios";

function APISearch(){
    const [search, setSearch] = useState('');
    const [result,setResult] = useState([]);
    const url = "https://randomuser.me/api/?results=50";

    useEffect(()=>{
        axios
        .get(url)
        .then(res => setResult(res.data.results))
    },[]);
    return <div>
        {JSON.stringify(result)}
    </div>
}

export default APISearch;
