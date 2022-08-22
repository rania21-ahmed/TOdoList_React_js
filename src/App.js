import React , {Component}from "react";
import './App.css';
import AddItems from "./components/additems/Additems";
import ToDoList from "./components/todolist/Todolist";

class App extends Component{

  state = {
    items : [
      {id:1,name:"Rania",age:22},
      {id:2,name:"Mahmoud",age:27},
      {id:3,name:"Reem",age:25}
    ]
  }

  Deleteitem = (id) =>{
    let items=this.state.items.filter(item=>{
      return item.id !== id
    })

    this.setState({items})
  }

  AddItems =(item)=>{

     item.id=Math.random();
     let items=this.state.items;
     items.push(item);
     this.setState({items})

  }

  render(){
    return(
      <div className="App container">
        <h1 className="text-center">TO DO List</h1>
        <ToDoList items ={this.state.items} deleteitems={this.Deleteitem} />
        <AddItems additems={this.AddItems} />
    </div>
    )
  }

}


export default App;
