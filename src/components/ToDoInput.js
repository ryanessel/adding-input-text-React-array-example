
import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'

function ToDoInput({addNewItem, toDoList}) {
const [itemToAdd, setItemToAdd] = useState("");
const sendForm =useRef(null)

// changes "itemToAdd" according user input
const handleChange = (event) => {
    
    setItemToAdd(event.target.value)
    // console.log(event.target.value)

    };

// // sends the data of the form input to the array which is propped in from (add new item)
const  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value)
    console.log(itemToAdd)
    addNewItem(itemToAdd)
    setItemToAdd("")
    
      }



  return (
    <div>


<form ref ={sendForm} onSubmit ={handleSubmit}>
  <label>
    ToDO Item:
    <input 
    type="text"
    name="name"
    value={itemToAdd}
    onChange={handleChange}
     />
  </label>
  <input
   type="submit" 
   value="Submit"

  />
</form>

    </div>
  )
}


export default ToDoInput