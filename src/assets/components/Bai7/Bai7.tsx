import React, { useState } from 'react'

export default function Bai7() {
    const [text,setText] = useState<string>("");
    const handlechange = (e:React.ChangeEvent<HTMLTextAreaElement>) =>{
        setText(e.target.value);
    }
  return (
    <div>
        <h1>Bài 7</h1>
        <textarea value={text} onChange={handlechange} placeholder="Nhập nội dung"></textarea>
        <p>Số kí tự: {text.length}</p>
    </div>
  )
}
