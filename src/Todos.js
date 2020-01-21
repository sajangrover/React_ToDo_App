import React from 'react';

const Todods =({todos , deletetodo})=>{
    const todolist = todos.length ?(
        todos.map(todo =>{
            return(
                <div className ="collection-item" key ={todo.id}>
                    <span onClick={()=>{deletetodo(todo.id)}}>{todo.content}</span>
                </div>

            )
        })
    ):(
        <p className="center">You have no todo's</p>
    )

    return(
        <div className="todos collection">
            {todolist}
        </div>
    )
}

export default Todods