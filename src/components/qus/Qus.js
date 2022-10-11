import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Qus.css'


const Qus = () => {
    const [Data,setData] =  useState()
    const prams = useParams()
    console.log(Data && Data.data)
   
    
 useEffect(()=>{
    fetch(`https://openapi.programming-hero.com/api/quiz/${prams.qusid}`)
    .then(response => response.json())
    .then(json => setData(json))
 },[prams])
    return (
       <section className='qus-body'>
         <div className='container text-center'>
            <h1 className='text-light'>Quiz of {Data && Data.data.name}</h1>
            {Data && Data.data.questions.map((item)=>{
                return(
                    <div className='question-container' key={item.id}>
                       <h4 className='p-5'>Quiz:{item.question}</h4>
                        {item.options.map((it,index)=>{
                            return(
                                <div className='' key={index}>
                                   <label className='question-item'><input  type="radio" name={item.id}/>
                                   <p className='m-3'> {it}</p>
                                   </label>
                                  
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
       </section>
    );
};

export default Qus;