import React from 'react'
import {useState} from 'react'

function useStates() {
    const [number,setNumber] = useState(0)

    const changeNumber=()=>{
      setNumber(number+1)
    }
  return (
    <div>
        <p>Number is {number}</p>
        <button onClick={changeNumber}>Button</button>
    </div>
  )
}

export default useStates