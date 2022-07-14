import { useEffect, useState } from 'react'
import './Form.css'

let Form=(Props)=>
{
    let [Text,setText]=useState('');
    let HandleInput=(Inp)=>
    {
        setText(Inp);
    }
    let HandleClick=()=>
    {
        Text===''?alert("Text Filed Can't Be Empty"):Props.Take(Text)
        setText('');
    }
    useEffect(() => {
        setText(Props.String)
    }, [Props.String])
    
    return(
        <div className="Form">
            <input type="text" placeholder='Enter any To Do ...' value={Text} onChange={(Event)=>{HandleInput(Event.target.value)}}/>
            <div className='Plus' onClick={()=>{HandleClick()}}>
                <i className={Props.Icon} ></i>
            </div>
        </div>
    )
}

export default Form