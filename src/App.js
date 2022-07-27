
// src/App.js
import "./App.css";
import contactsData from "./contacts.json";
import React, {useState} from 'react';

function App() {
  const firstFive = contactsData.slice(0, 5);
  const [contacts, setContacts] = useState(firstFive);
 
  

  return <div className="App">
    <h1>IronContacts</h1>

    <table className="table">
      <thead className="mainRow">
        <tr>
          <th className="tHeading">Picture</th>
          <th className="tHeading">Name</th>
          <th className="tHeading">Popularity</th>
          <th className="tHeading">Won<br></br>Oscar</th>
          <th className="tHeading">Won<br></br>Emmy</th>
        </tr>
      </thead>
  
      <tbody>
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
    
        </tbody>
      </table>
  </div>;
}
export default App;