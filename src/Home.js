import {  useQuery } from '@tanstack/react-query'
import React from 'react'
import Axios from 'axios'

const Home = () => {
  const {data,isLoading,isError,refetch}=useQuery(["cat"],()=>{
    return Axios.get("https://catfact.ninja/fact").then((res)=>res.data);
  })
  if(isLoading)
  return(
   <div>The text is loading</div>
  )
  if(isError)
  return(
    <div>The text is not available</div>
  )
  return (
    <div className='bg-rose-500'>
        Welcome to the HOME Page of CATS
        <p>{data?.fact}</p>
        <button onClick={refetch}>Udpate</button>
    </div>
  )
}

export default Home