
// src/App.js
import "./App.css";
import contactsData from "./contacts.json";
import React, {useState} from 'react';

function App() {

  const [contacts, setContacts] = useState(contactsData);
  const firstFive = contacts.slice(0, 5);

  return <div className="App">
    <h1>IronContacts</h1>
    <table className="table">
    <tr className="mainRow">
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Won Oscar</th>
        <th>Won Emmy</th>
        
    </tr>
    
      
        {firstFive.map( elem => {
          let twoDecimalsPopularity = elem.popularity.toFixed(2)
          let wonOscar = elem.wonOscar && <p>🏆</p>;
          let wonEmmy = elem.wonEmmy && <p>🏆</p>;
        return (

          <tr>
              <td className="imageContact"> <img src={elem.pictureUrl} alt="{elem.name}"/> </td>
              <td>{elem.name}</td>
              <td>{twoDecimalsPopularity}</td>
              <td>{wonOscar}</td>
              <td>{wonEmmy}</td>
              
          </tr>
        )
      }
      )}
    </table>


  </div>;
}
export default App;