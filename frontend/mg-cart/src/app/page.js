"use client"

import axios from "axios";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  const loadData = async ()=>{
    const res = await axios.get(`http://localhost:8001/product/all/10&1&1000&AMZ&Laptop`);
    console.log(res)
  }
  useEffect(()=>{
    loadData()
  },[])
  return (
    <div>
      Hello
    </div>
      
  );
}
