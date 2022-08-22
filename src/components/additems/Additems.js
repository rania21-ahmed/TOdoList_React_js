import React ,{Component} from "react";
import './Additem.css';

class AddItems extends Component{

    state ={
        name:'',
        age: ''
    }

    handelhange =(e)=>{

        //console.log(e.target.value)
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit =(e)=>{
        e.preventDefault();
       if(e.target.name.value === ''){
            return false
       }else{
            this.props.additems(this.state)
            this.setState({
            
                    name:'',
                    age:''
            
            })
       }
        //console.log(this.state)
    }

    render(){
        return(
            <div className="additems">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter the name....." id="name" onChange={this.handelhange}  value={this.state.name}/>
                    <input type="number" placeholder="Enter the number....." id="age" onChange={this.handelhange} value={this.state.age}/>
                    <input type="submit" value="Add"/>
                </form>
            </div>
        )
    }

}

export default AddItems;