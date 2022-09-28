import React from "react";
import { useState } from "react";
const ToDo = () => {
    const [inputdata, setinputdata] = useState('');
    const [item, setitem] = useState([]);
    const additem = () => {
        if (!inputdata) {

        }
        else {
            setitem([...item, inputdata]);
            setinputdata('')
        }
    }
    const delitem=(id)=>{
        console.log(id);
        const updateditems = item.filter((element,ind)=>{
        return ind !== id;
        })
        setitem(updateditems);
    }
    const removeall=()=>{
       return setitem([]);
    }
    return (<>

        <input type="text" placeholder="add item " value={inputdata} onChange={(e) => setinputdata(e.target.value)} />
        <button onClick={additem}>+</button>
        {item.map((element, ind) => {
            return (
                <div key={ind}>
                    <h3>{element}</h3>
                    <button onClick={()=>delitem(ind)}>delete</button>
                </div>
                
            )
        })}
       

        
    </>)
}
export default ToDo;