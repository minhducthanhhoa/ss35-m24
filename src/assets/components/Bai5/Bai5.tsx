import React, { useState } from 'react'

export default function Bai5() {
    const [inputValue,setInputValue] = useState<string>("");
    const handlechange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setInputValue(e.target.value);
    }
  return (
    <div>
        <h1>Bài 5</h1>
        <input
            type="text"
            placeholder="Nhập nội dung"
            onChange={handlechange}
         />
         <h3>{inputValue}</h3>
    </div>
  )
}
