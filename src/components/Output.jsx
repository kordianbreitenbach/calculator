import React,{ useState,useContext } from 'react'
import { QContext } from './Context';
import '../App.css'




const Output=()=>{
  const {count,secondCount}=useContext(QContext);
    return(
        <div>
         <output className="display all" >{count}</output>
        <output className="display" id="display">{secondCount}</output>
        </div>
    );
}

export default Output;