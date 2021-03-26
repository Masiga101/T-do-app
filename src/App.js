import React, {useState} from 'react';
import './App.css';
import List from "./components/List"

function App(props) {

  const [input, setInput] = useState("")
  const [list, setList] = useState([])

  


 function clearInput(){
   setInput("")
 } 

  function addInput(e){
    
    return  setInput(e.target.value)
  
  }

  function addItem(e){
    
    e.preventDefault()
    if(!input){
      alert("please insert an item")
    }else{
      setList((prevItems)=>{
        return [...prevItems, input]
      })
      clearInput()
    }
   
   
  }

  
function deleteItem(index){
 list.splice(index, 1)
 setList([...list])
 console.log(index);
}

  return (<div className="top-container">
   <div  className="container">
     <h1>To do app</h1>
     <div className="input-container">
     <input  onChange={addInput} placeHolder="Add task..." type="text" value={input} name="task"/>
      <button
        type="submit"
        onClick={(e)=>addItem(e)}
        >Add</button>
     </div>
       
     {list.map((item, index)=>{
      return <List key={index} item={item}  onclick={() => deleteItem(index)}/>
     })
     }
    
   </div>
   <footer >
     <span>© {new Date().getFullYear()} All Rights Reserved Masiga</span>
     <span>designed and developed by <a href="https://focused-hugle-c75993.netlify.app/">Masiga Allan</a></span>
   </footer>
   </div>
  );
}

export default App;
