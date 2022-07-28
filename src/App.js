
// src/App.js
import "./App.css";
import contactsData from "./contacts.json";
import React, {useState} from 'react';

function App() {
  const firstFive = [...contactsData].slice(0, 5);
  const [contacts, setContacts] = useState(firstFive);
  const remainingContacts = contactsData.slice(5);

  
  const randomSelectContact = () => {
      let randomContact = remainingContacts[Math.floor(Math.random()*remainingContacts.length)];
      const newArr = [...contacts];
      newArr.push(randomContact);
      setContacts(newArr)  
      console.log(newArr)
  }

  const sortByName = () => {
    const ordered = [...contacts].sort((a,b) => a.name.localeCompare(b.name));
    setContacts(ordered);
    
}


  const sortByPopularity = () => {
      const ordered = [...contacts].sort((a,b) => b.popularity - a.popularity);
      setContacts(ordered);
      
  }

 
  
  return <div className="App">
    <h1>IronContacts</h1>

    <button onClick={randomSelectContact}> Add random contact</button>
    <button onClick={sortByName}> Sort by name</button>
    <button onClick={sortByPopularity}> Sort by popularity</button>

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
        {contacts.map( elem => {
          let twoDecimalsPopularity = elem.popularity.toFixed(2)
          let wonOscar = elem.wonOscar && <p>🏆</p>;
          let wonEmmy = elem.wonEmmy && <p>🏆</p>;
        return (

       
            <tr key={elem.id}>
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