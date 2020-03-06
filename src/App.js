import React from 'react';
import APISearch from './Components/APISearch';
import Nav from './Components/Nav';

function App() {
  return ( <>
      <Nav />
      <table className="table table-striped">
        <thead>
            <tr>
                <th scope="col">Picture</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">Birthday</th>
            </tr>
        </thead>
        <tbody>
            <APISearch />
        </tbody>
    </table>
    </>
  );
}

export default App;
