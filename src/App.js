import logo from './logo.svg';
import { useState } from 'react';
import ToDoInput from './components/ToDoInput';

import './App.css';


function App() {

  const [toDoList, setTodoList] = useState(["cat", "dog", "mouse", "frog"]);

const addNewItem = (item) => {
  setTodoList(toDoList => [...toDoList, item]);

}





  return (
    <div className="App">
<div>To do list</div>

<div>
{/*  2nd args is , */}
{toDoList.map((listItem, index) => {
return (
<div key={index}>
  {listItem}


</div>


)







})}

<ToDoInput addNewItem={addNewItem} toDolist ={toDoList}/>
</div>



    </div>
  );
}

export default App;
