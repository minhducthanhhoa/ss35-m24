import React, { useState } from 'react'

export default function Bai3() {
    const [color,setColor] = useState<string>("black");
    const handleChangeColor = () =>{
        setColor(color === "black" ? "red" : "black");
    }
  return (
    <div>
        <h1>Bài 3</h1>
        <h3 style={{color}}>Tiêu đề văn bản</h3>
        <button onClick={handleChangeColor}>Thay đổi màu</button>
    </div>
  )
}
