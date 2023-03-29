import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

import CreateArea from "./CreateArea";
import Axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';//delete icon 
import Slide from '@mui/material/Slide'; //slide



function App() {




  const [listOfUsers, setListOfUsers] = useState([]); //conponent app

  useEffect(() => {
    //api call
    const interval = setInterval(() => {
      Axios.get("http://localhost:3001/getUsers").then((response) => {
        setListOfUsers(response.data);
      });
    }, 500)

  }, []);


  function addNote() {


    Axios.post("http://localhost:3001/createUser", { title, content }).then(
      (response) => {
        setListOfUsers([...listOfUsers, { title, content }]);
      }
    );


  }







  return (

    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {listOfUsers.map((user) => {
        return (<div className="note">

          <h1>{user.title}</h1>
          <p>{user.content}</p>
          <button onClick={() => { Axios.delete(`http://localhost:3001/deleteUser/${user._id}`) }}>
            <DeleteIcon />

          </button>

        </div>);

      })}
      <Footer />
    </div>

  );
}

export default App;
