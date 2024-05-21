import React, { useState } from 'react'

export default function Bai9() {
    const [gender,setGender] = useState<string>("Nam");
    const handlechange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setGender(e.target.value);
    }
  return (
    <div>
        <h1>Bài 9</h1>
        <p>Giới tính: {gender}</p>
        <div>
            <input 
                type="radio"
                value="Nam"
                checked={gender === "Nam"}
                onChange={handlechange}
             />
             <label htmlFor="">Nam</label>
        </div>
        <div>
            <input 
                type="radio"
                value="Nữ"
                checked={gender === "Nữ"}
                onChange={handlechange} 
            />
            <label htmlFor="">Nữ</label>
        </div>
        <div>
            <input 
                type="radio"
                value="Khác"
                checked={gender === "Khác"}
                onChange={handlechange} 
            />
            <label htmlFor="">Khác</label>
        </div>
    </div>
  )
}
