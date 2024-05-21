import React, { useState } from 'react'
interface Product{
    id:number;
    name:string;
    price:number;
    quanlity:number;
}

export default function Bai2() {
    const [product,setProduct] = useState<Product>({
        id:1,
        name:"Coca cola",
        price:1000,
        quanlity:10
    })
  return (
    <div>
        <h1>Bài 2</h1>
        <h3>Thông tin cá nhân</h3>
        <p>Id: {product.id}</p>
        <p>Name: {product.name}</p>
        <p>Price: {product.price} $</p>
        <p>Quanlity: {product.quanlity}</p>
    </div>
  )
}
