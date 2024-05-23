"use client"
import React from "react";
import Hero from "@/component/main/Hero";
import Skills from "@/component/main/Skills";
const Home = () => {
  // const handleClick= async ()=>{
  //   let data={
  //     name:"adil",
  //     role:"coder"
  //   }
  //   let a = await fetch("/api",{
  //     method:"POST", headers:{
  //       "Content-Type":"application/json",
  //     },
  //     body:JSON.stringify(data),
  //   })
  //   let res = await a.json()
  //   console.log(res);
  // }
  return (
    <>
      <main className="h-full w-full overflow-hidden">
        <div className="flex flex-col ">
          <Hero />
          <Skills/>
        </div>
        {/* <button style={{color:"white"}} onClick={handleClick}>click me</button> */}
      </main>
    </>
  );
};
export default Home;
