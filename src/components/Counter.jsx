import React, { useState, useEffect } from 'react'

export default function Counter() {

  const [count, setCount] = useState(0);
  const [dynamicClass, setDynamicClass] = useState('text');

  // First iteration

  const handleIncrese= () => setCount(prev=>prev + 1)
  const handleDecrese= () => setCount(prev=>prev - 1)

  // Second and Fourth iteration

  useEffect(()=>{
    setCount(Math.floor(Math.random() * 10))
    return ()=>{
      setCount(0)
      setDynamicClass('text')
      console.log('All clean here. Count:', count, 'Class:', dynamicClass);
    }
  },[])

  useEffect(()=>{

    if(count<=0){
      setDynamicClass('red')
    } else if(count>1 && count<6){
      setDynamicClass('orange')
    } else{
      setDynamicClass('green')
    }

  },[count])

  // Third iteration

  return (
    <div>
      <p>Counter: <span className={dynamicClass}>{count}</span></p>
      <button onClick={handleIncrese}>+ Increase</button>
      <button onClick={handleDecrese}>- Decrease</button>
    </div>
  )
}
