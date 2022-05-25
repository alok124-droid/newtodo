import React from 'react'


const TodoList = (props) => {
 

  return (
    <div className='main'>TodoList
 
    {props.component.map((elem)=>(
          
<div key={elem.id} className="div">
<input type="checkbox"  />
     {elem.value}
     </div> ))}
      
       



    </div>
  
  )
}

export default TodoList