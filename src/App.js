import { useState } from 'react';
import './App.css';
import Task from './Task'

function App() {
  const [todolist, settodolist] = useState([]);
  const [newtask, setnewtask] = useState("");
   
  const handleaddtask=()=>{
    const task={
      id: todolist.length===0 ? 1 : todolist.length+1,
      Taskname: newtask,
      complete:false
    }
    settodolist(task.taskName !== "" ? [...todolist, task] : todolist);
  }

  const handeldelete=(id)=>{
    settodolist(todolist.filter((task) => task.id !== id));
  }

  const handelcomplete=(id)=>{
    settodolist(todolist.filter((task) => task.id !== id));
  }

  return (
    <div className="App ">
    <div className='flex items-center justify-center mt-10'>
      <input className='border-2 border-rose-500 w-[50%] h-[3rem]'  value={newtask} onChange={(event)=>setnewtask(event.target.value)}/>
      <button className='mx-2 p-3 bg-blue-300' onClick={handleaddtask}>ADD TASK</button>
    </div>
    <div>
      {todolist.map((task)=>{
        return(<Task 
        id={task.id}
        Taskname={task.Taskname}
        handeldelete={handeldelete}
        handelcomplete={handelcomplete}
        />)
      })}
    </div>
    </div>
  );
}

export default App;
