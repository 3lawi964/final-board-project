import React from "react";
import {useState} from 'react';


export default function Toggle() {

    const [toggleViewMode, setToggleViewMode] = useState(false);


    return (

        <div>
  <div className="flex justify-end p-5">
  <button 
    onClick={() => setToggleViewMode(!toggleViewMode)}
  >
    {!toggleViewMode ? 'grid' : 'list'}
  </button>
</div>
</div>
    )
}

