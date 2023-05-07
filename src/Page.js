import React from 'react'
import { useContext } from 'react'
import { AppContext } from './App'
import { useState } from 'react';


const Page = () => {
  const {setname}=useContext(AppContext);
  const [change, setchange] = useState("");
  return (
    <div>
        Please write the name of CARTL Leader
        <input onChange={(e)=>{setchange(e.target.value)}}  className="border-2 border-black bg-gray-400" value={change}/>
        <button onClick={setname(change)} className='border-2 border-red-400'>CHnage Name</button>
    </div>
  )
}

export default Page