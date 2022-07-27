
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
    <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
    </tr>
    
      
        {firstFive.map( elem => {
          let twoDecimalsPopularity = elem.popularity.toFixed(2)
        return (
          <tr>
              <td className="imageContact"> <img src={elem.pictureUrl} alt=""/> </td>
              <td>{elem.name}</td>
              <td>{twoDecimalsPopularity}</td>
          </tr>
        )
      }
      )}
    </table>


  </div>;
}
export default App;