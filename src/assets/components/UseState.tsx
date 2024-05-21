import React,{useState} from 'react'

export default function UseState() {
    const [count, setCount] =useState<number>(0);
    const inscrease = () =>{
        setCount(prev => prev+1);
        setCount(a => a+2);
        setCount(b => b+3);
    }

    // useState dùng để quản lí trạng thái của dữ liệu
    // dùng destructoring để hứng giá trị
    // const result = useState(0)
    // const [c,d] = useState(0)
    // console.log("gia tri result", result);
    // let arr = [5,6];
    // let [a,b] = arr;
    // khi cập nhật lại trạng thái của dữ liệu thì component re render lại
    console.log("component re-render");
  return (
    <div>UseState
        <p>Giá trị biến count: {count}</p>
        <button onClick={inscrease}>Tăng</button>
        <button onClick={() => setCount(count - 1)}>Giảm</button>
    </div>
  )
}
