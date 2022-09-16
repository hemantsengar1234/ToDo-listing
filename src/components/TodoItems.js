import React from 'react'
import './todoItems.css'

const TodoItems = (props) => {
  return (
    <div className='container'>
        <div className="row my-3">
            <div className="col-6">
                <h6>{props.action}</h6>
            </div>
            <div className="col-6">
                <button onClick={()=>{
                    props.onSelect(props.id)
                }} className="btn">Delete</button>
            </div>
            
        </div>
      
    </div>
  )
}

export default TodoItems
