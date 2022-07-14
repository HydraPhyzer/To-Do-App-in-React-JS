import './App.css'
import Form from './Components/Form'
import Todo from './Components/Todo'

let App=()=>
{
    return(
        <div className='App'>
            <div className="App-Content">
                <Form/>
                <Todo/>
            </div>
        </div>
    )
}
export default App