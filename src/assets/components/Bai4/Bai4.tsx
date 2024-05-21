import React, { useState } from 'react'

export default function Bai4() {
    const[isVisible,setIsVisible] = useState<boolean>(false);
    const handleToggleVisibility = () =>{
        setIsVisible(!isVisible);
    }
  return (
    <div>
        <h1>Bài 4</h1>
        <button onClick={handleToggleVisibility}>
            {isVisible ? "Ẩn" : "Hiện"}
        </button>
        {isVisible && <h3>Tiêu đề văn bản</h3>}
    </div>
  )
}
