import React,{useState, useEffect} from 'react';
import axios from "axios";
import TableBody from './TableBody';

function APISearch(){
    // const [search, setSearch] = useState('');
    const [data,setData] = useState(null);
    const url = "https://randomuser.me/api/?results=50";

    useEffect(()=>{
        axios
        .get(url)
        .then(res => {            
            setData(res.data.results)       
        })
    },[]);
    return (
        data ? data.map( (element,index) => <TableBody key ={index} data = {element}/> ) : <td>Loading...</td>
    );
}

export default APISearch;
