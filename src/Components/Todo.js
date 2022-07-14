import React from 'react'
import './Todo.css'

const Todo = (Props) => {
  return (
    <div className='Todo'>
        {
            Props.GetTodos.map((Elem,Ind)=>
            {
                return(
                    <div className="All-Todo" key={Ind}>
                        <p>{Elem}</p>
                        <i className="fa-solid fa-marker E " onClick={()=>{Props.Edit(Ind,Elem)}}></i>
                        <i className="fa-solid fa-circle-xmark X" onClick={()=>{Props.Del(Ind)}}></i>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Todo