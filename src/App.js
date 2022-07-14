import { useState } from 'react'
import './App.css'
import Form from './Components/Form'
import Todo from './Components/Todo'

let App = () => {
    let [ToDoArray, setToDoArray] = useState([]);
    let CollectInput = (Value) => 
    {
        let Temp=[Value,...ToDoArray];
        setToDoArray(Temp);
    }
    let Delete=(Ind)=>
    {
        let newArr=[...ToDoArray];
        newArr.splice(Ind,1);
        setToDoArray(newArr);
    }
    return (
        <div className='App'>
            <div className="App-Content">
                <Form Take={CollectInput} />
                {
                    ToDoArray.length === 0 ? <div className="alert alert-success mt-2" role="alert">
                        No To Do Available Yet !!
                    </div> : 
                    
                    <Todo GetTodos={ToDoArray} Del={Delete}/>
                }
            </div>
        </div>
    )
}
export default App