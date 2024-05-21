import React, { useState } from 'react'

export default function Bai6() {
    const [count,setCount] = useState<number>(0);
    const increase = () =>{
        setCount(count + 1);
    }
  return (
    <div>
        <h1>Bài 6</h1>
        <p>Bạn đã click {count} lần</p>
        <button onClick={increase}>Click để tăng số lần click</button>
    </div>
  )
}
