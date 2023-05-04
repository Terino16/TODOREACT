import React from 'react'

const Task = (props) => {
  return (
    <div className='flex p-3 align-center items-center justify-center'>
     <p className='font-semibold '> {props.id}. </p>
     <p className='font-semibold '> {props.Taskname}</p>
      <button className='bg-rose-500 p-1 mx-2' onClick={()=>props.handeldelete(props.id)}>DEL</button>
      <button className='bg-green-500 p-1 mx-2' onClick={()=>props.handelcomplete(props.id)}>DONE</button>
      </div>
  )
}

export default Task