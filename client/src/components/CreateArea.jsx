import React,{useState,useEffect} from "react";
import Axios from "axios";
import AddIcon from '@mui/icons-material/Add';

import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

  const [listOfUsers, setListOfUsers] = useState([]);
  const [title, setTitle] = useState(""); //title cr
  const [content, setContent] = useState(""); //content cr



  function submitNote(event){

      event.preventDefault();
      Axios.post("http://localhost:3001/createUser", { title, content }).then(
        (response) => {
          // alert("Created!");
          setListOfUsers([...listOfUsers, { title: title, content: content }]);
        }
      );
      setListOfUsers({title:"",content:""});

    event.preventDefault();
     //prevents reloading on add

  }

  
    
  

  

  return (
    <div>
      <form>
        <input name="title" onChange={(event) => {
            //cr
            setTitle(event.target.value);
          }} value={listOfUsers.title} placeholder="Title" />
        <textarea name="content" onChange={(event) => {
            //cr
            setContent(event.target.value);
          }} value={listOfUsers.content} placeholder="Take a note..." rows="3" />
          <Zoom in={true}>
        <button onClick={submitNote}><AddIcon /></button>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
