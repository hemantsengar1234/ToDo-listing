import React, { useState } from 'react'

import "./todo.css"
import TodoItems from './TodoItems'

const Todo = () => {

    const [action, setAction] = useState("")
    const [data, setData] = useState([])

    const onChangeHandler = (e) =>{
        setAction(e.target.value)
    }

    const submitHandler =(e)=>{
        e.preventDefault();
        const newData = action;
        setData([...data,newData])

        setAction('')
    }

    const deleteItems =(b)=>{
        const mainData = data.filter((curEle,index)=>{
            return index !== b;
        })
        setData(mainData)
    }


  return (
    <div className="container">
            <div className="row justify-content-center align-items-center main-row">
                <div className="col shadow main-col bg-white">
                    <div className="row bg-dark text-white">
                        <div className="col  p-2">
                            <h4 className='text-center'>Todo Listing App </h4>
                        </div>
                    </div>
                    <form onSubmit={submitHandler} >
                        <div className="row justify-content-between text-white p-2">
                            <div className="form-group flex-fill mb-2 col-9">
                                <input id="todo-input" type="text" className="form-control" value={action} 
                                onChange={onChangeHandler} />
                            </div>
                            <button type="submit" className="btn btn-primary mb-2 ml-2 col-3">Add Items</button>
                        </div>
                    </form>
                    {
                        data.map((value,index) =>{
                            return <TodoItems
                            key={index}
                            id={index}
                            action={value}
                            onSelect={deleteItems}
                            />
                        })
                    }
               
                </div>
            </div>
        </div>
  )
}

export default Todo
