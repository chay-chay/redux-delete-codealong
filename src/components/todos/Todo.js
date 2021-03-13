import React from 'react'

// const Todo = props => <li>{props.text}</li>
// Refactor to have delete button 
const Todo = props => {
    return (
      <div>
        {/* <span>{props.text}</span><button>DELETE</button> */}
        {/* <span>{props.text}</span><button onClick={() => props.delete(props.text)}>DELETE</button> */}
        
        {/* // Now, when props.delete is called, an action is dispatched that contains an id only as its payload. */}
        <span>{props.todo.text}</span><button onClick={() => props.delete(props.todo.id)}>DELETE</button>

      </div>
    )
  }


export default Todo;
