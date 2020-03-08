import React from 'react';
import TableBody from './TableBody';
import "./table.css";

function TableShell(prop){
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Picture</th>
                    <th scope="col" className={prop.sortClass} onClick={prop.handleSort}>Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">Birthday</th>
                </tr>
            </thead>
            <tbody>
                {prop.data ? prop.data.map( (element,index) => <TableBody key ={index} data = {element}/> ) : <td>Loading...</td>}
            </tbody>
        </table>
    );
};

export default TableShell;