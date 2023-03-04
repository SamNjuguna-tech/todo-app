import { useState } from "react";
import "./App.css"
let nextId = 0;
let newName;
export default function App() {
  const [name, setName] = useState('');
  const [todos, setTodos] = useState([])


  
  return(
    <>
    <header className="header">

    </header>
    <div className="container">
      <div className="count">
         {/* <p> Todos : {todos.length}</p> */}
      </div>
      <form>
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
          <input type="button" value={"sabmit"} 
              onClick={(e)=>{
                e.preventDefault();
                setName("");
                setTodos([
                  ...todos,
                  { id: nextId++,title: name}
                ])
                console.log(todos)
              }}
          />

      </form>
      <div>
        {
          todos.map((elem)=>{
            return(
              <div key={elem.id}>
                <p>{elem.title}</p>
                
                <button className="btn delete"
                 onClick={
                  ()=> setTodos(todos.filter((e)=>(e.id !== elem.id)))
                 }
                >delete</button>
                <button className="btn edit"
                onClick={
                  
                  ()=>{
                      newName = prompt("enter new name")
                      let Updater = [...todos]
                      let index = Updater.findIndex((item)=>item.id === elem.id)
                      Updater[index]={...Updater[index], title:newName}
                      setTodos(Updater)
                      alert(`edit saved!`)
                    
                  }
                
                }
                >edit</button>
              </div>
            )
          })
        }
      </div>
    </div>
    </>
   
  )
};
