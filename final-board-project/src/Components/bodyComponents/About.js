import React from "react";

export default function About() {
  let baraa = <div><a rel="noopener noreferrer" href="https://github.com/BaraaNazar" target="_blank">Baraa Nazar</a></div>
  let ali = <div><a rel="noopener noreferrer" href="https://github.com/3lawi964" target="_blank">Ali Majid</a></div>
  let noor = <div><a rel="noopener noreferrer" href="https://github.com/noor-ridha" target="_blank">Noor Rida</a></div>
  let shahla = <div><a rel="noopener noreferrer" href="https://github.com/ShahlaKamal96" target="_blank">Shahla Kamal</a></div>
  
  return (
    <div>
      <div className="h-96 relative flex justify-center md:w-full sm:w-fit">
      <div className="absolute flex justify-center text-center h-full md:w-full sm:w-fit m-2">
      <img className=" p-1 bg-white border rounded" src="https://wallpaper.dog/large/20559808.jpg" alt="test"/>
      </div>
      <div className="absolute flex items-center justify-center w-full h-full">
      <h1 className=" z-10 flex items-center justify-center text-center text-white text-5xl sm:text-6xl xl:text-9xl 2xl:text-7xl" >About Us</h1>
      </div>
      </div>

      <div className="z-10 flex justify-center text-2xl text-black m-10">
      <p className="z-10 text-black mt-30">
      This is a great website for note-taking. It has a simple, easy-to-use interface that makes it easy for users to quickly and easily take notes. 
      </p>
      </div>
      <div className="flex justify-center text-2xl text-black flex-wrap items-center text-center">
        
        <span className="z-10 m-1 bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-2 px-4 border-b-4 border-indigo-700 hover:border-indigo-500 rounded">{baraa}</span>
        <span className="z-10 m-1 bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-2 px-4 border-b-4 border-indigo-700 hover:border-indigo-500 rounded">{ali}</span>
        <span className="z-10 m-1 bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-2 px-4 border-b-4 border-indigo-700 hover:border-indigo-500 rounded">{noor}</span>
        <span className="z-10 m-1 bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-2 px-4 border-b-4 border-indigo-700 hover:border-indigo-500 rounded">{shahla}</span>
      </div>
    </div>
  );
}
