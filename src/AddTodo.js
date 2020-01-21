import React from 'react';

class AddTodo extends React.Component{
    state = {
        content : ''
    }
    handlechange=(e)=>{
        this.setState({
            content : e.target.value
        })
        
    }
    handleSubmit =(e) =>{
        e.preventDefault();
        this.props.addtodo(this.state)
        this.setState({
            content:''
        })
    }
    render(){
        return(
            <div >
                <form onSubmit = {this.handleSubmit}>
                    <label>Add New todo</label>
                    <input type ="text" onChange ={this.handlechange} value ={this.state.content}/>
                </form>
            </div>
        )
    }
}
export default AddTodo