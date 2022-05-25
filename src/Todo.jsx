import React from 'react'
import TodoList from './TodoList'

const Todo = () => {
    let [bag,setData1]=React.useState("")
let [data,setData]=React.useState([])

let handleChange=(e)=>{
 setData1(e.target.value)
}
let myFun=()=>{
  setData([...data,{id:Date.now(),value:bag,status:false}])
  
}

  return (
    <div>
        <input type="text" placeholder='Enter Your Data' onChange={handleChange}/>
        <button onClick={myFun}>Click</button>
        <TodoList component={data} ></TodoList>
    </div>
  )
}

export default Todo