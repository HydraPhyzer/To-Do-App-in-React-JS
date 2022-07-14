import { useEffect, useState} from 'react'
import './App.css'
import Form from './Components/Form'
import Todo from './Components/Todo'

let App = () => {
    let [ToDoArray, setToDoArray] = useState([]);
    let [In,setIn]=useState(-1);
    let [Str,setStr]=useState('');

    let CollectInput = (Value) => 
    {
        if(Str!=='')
        {
            let Temp=[...ToDoArray];
            Temp[In]=Value;
            localStorage.setItem("Todo",JSON.stringify(Temp));
            setToDoArray(Temp);

            setStr('');
            setIn(-1);
        }
        else
        {
            let Temp=[Value,...ToDoArray];
            localStorage.setItem("Todo",JSON.stringify(Temp));
            setToDoArray(Temp);
        }
    }

    let Delete=(Ind)=>
    {
        let newArr=[...ToDoArray];
        newArr.splice(Ind,1);
        localStorage.setItem("Todo",JSON.stringify(newArr));
        setToDoArray(newArr);
    }
    
    let EditText=(Ind,Elem)=>
    {
        setIn(Ind);
        setStr(Elem);          
    };
    useEffect(()=>
    {
        let Ar=JSON.parse(localStorage.getItem("Todo"));
        if(Ar)
        setToDoArray(Ar);
    },[])
    return (
        <div className='App'>
            <div className="App-Content">
                <Form Take={CollectInput} 
                Icon={In===-1?"fa-solid fa-plus":"fa-solid fa-marker"} 
                String={Str===''? '':Str}

                />

                {
                    ToDoArray.length === 0 ? <div className="alert alert-success mt-2" role="alert">
                        No To Do Available Yet !!
                    </div> : 
                    
                    <Todo GetTodos={ToDoArray} Del={Delete} Edit={EditText}/>
                }
            </div>
        </div>
    )
}
export default App