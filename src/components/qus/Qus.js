import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEye } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import './Qus.css'
import toast, { Toaster } from 'react-hot-toast';


const Qus = () => {
    const [Data,setData] =  useState()
    const prams = useParams()
    //console.log(Data && Data.data)
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
                const click = ()=>{ toast(` ANSWER : ${item.correctAnswer}`)}
                return(
                    <div className='question-container' key={item.id}>
                        <div className='question-view'>
                        <h4 className='p-5'>Quiz:{item.question}</h4>
                        <button className='qus-btn' onClick={click}> 
                        <Toaster
                            position="top-right"
                            reverseOrder={false}
                            />
                         <FontAwesomeIcon icon={faEye}></FontAwesomeIcon></button>
                        </div>
                       
                       
                        {item.options.map((it,index)=>{
                             const correctAnswer = () =>{
                                if(it===item.correctAnswer){
                                    toast.success('Successfully !')
            
                                }else{
                                    toast.error("wrong answer.")
                                }
            
                            }
                            return(
                                <div className='' key={index}>
                                   <label className='question-item' onClick={correctAnswer}><input  type="radio" name={item.id}/>
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