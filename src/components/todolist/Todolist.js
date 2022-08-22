import React from "react";
import './Todolist.css';

const ToDoList = (props)=>{
    const {items , deleteitems}=props;
    let length =items.length;
    const listItem =length ?(
        items.map(item =>{
            return(
                <div key={item.id}>
                    <span className="name">{item.name}</span>
                    <span className="age">{item.age}</span>
                    <span className="action icon" onClick = { () => deleteitems(item.id)}>&times;</span>
                </div>
            )
        })
    ) :(
        <p> This is no show items</p>
    )
    return(
     <div className="Listitems">
        <div >
            <span className="name title">Name</span>
            <span className="age title">Age</span>
            <span className="action title">Action</span>
        </div>
        {listItem}
     </div>   
    )
}

export default ToDoList;