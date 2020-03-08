import React from 'react';

function TableBody(prop){
    let date = new Date(prop.data.dob.date)
    let formattedDate =`
        ${date.getMonth()+1 <= 9 ? `0${date.getMonth()+1}` : date.getMonth()+1} -
        ${date.getDate()+1 <= 9 ? `0${date.getDate()+1}` : date.getDate()+1} -
        ${date.getFullYear()}`
    return ( 
        <tr>
            <td><img src ={prop.data.picture.thumbnail} alt="employee pic"/></td>
            <td>{`${prop.data.name.first} ${prop.data.name.last}`}</td>
            <td>{prop.data.phone}</td>
            <td>{prop.data.email}</td>
            <td>{formattedDate}</td>
        </tr>);
};

export default TableBody;