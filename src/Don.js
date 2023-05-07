import React from 'react'
import { useContext } from 'react'
import { AppContext } from './App'

const Don = () => {
    const {name}=useContext(AppContext);
  return (
    <div>
        NAme of  cartel leader is {name}
    </div>
  )
}

export default Don