import React, {  useReducer, useState } from 'react';
import { initilstate, reducer } from './Reducer';


const InputText = ()=>{
    const [text,setText] =useState ("");
    const [state,dispach] =useReducer(reducer,initilstate)

    const handalkey = event =>{
      if (event.keyCode === 13){
        if(text == " ")
        return;
        dispach({
            type:"ADD_REMINDER",
            payload:{
                id: Math.random(),
                text
            }
        })
      }      
    }

    return(
        <div>
            <input placeholder='Add Your Tast' 
            value={text}  type="text" onChange={event => setText(event.target.value) }
            onKeyUp={handalkey} />

            {
                state.todos.map(item=>{
                    return(
                        <div style={style.list} key={item.id}>
                            <p style={{margin:20}}>{item.text}</p>
                            <div style={style.del} onClick={()=>
                                dispach({
                                    type:"Delete_TAST",
                                    payload:item.id
                                })}>X</div>
                        </div>
                    )
                })
            }
        </div>
    )
}



const style = {
    list: { display: "flex", alignItems: "center", justifyContent: "center" },
    del: {
      width: 40,
      height: 40,
      borderRadius: 10,
      lineHeight: "40px",
      backgroundColor: "gold"
    },
    
  };

  export default InputText;