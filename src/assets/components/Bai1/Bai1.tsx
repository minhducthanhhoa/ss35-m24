import React, { useState } from 'react'

export default function Bai1() {
    const [name,setName] = useState<string>("Ngô Minh Đức");
  return (
    <div>
        <h1>Bài 1</h1>
        <p>Họ và tên: {name}</p>
    </div>
  )
}
