// import logo from './logo.svg';
import Table from './Table';
import Card from './Card';

// import './App.css';
// import React from 'react';
import React, { useEffect, useState } from 'react';

import Bank from './Bank';


// function App(){
//   const [count,setcount]=useState(0);
//   useEffect(()=>{
//   setTimeout(()=>{setcount(count=>count+1)},2000)},[]);

// return (
//   <h1>My Website counting {count} times</h1>
// )
// }


function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user?.id}>{user?.title}</li>
        ))}
      </ul>
      <Bank />
      <Table />
      <Card name="irshad" tel="9123455"/>

    </div>
  );
}

export default App;
