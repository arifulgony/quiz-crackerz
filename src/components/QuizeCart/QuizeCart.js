import React from 'react';
import { Button } from 'react-bootstrap';
import'./QuizeCart.css'
import { useNavigate } from "react-router-dom";

const QuizeCart = ({quize}) => {
    const {name,logo, total,id} =quize;
    const navigator =  useNavigate();
    const submit = (id)=>{
        navigator(`qus/${id}`)
    }
    return (
            <div className="col-xl-6 col-md-6">
            <div className='quiz-cart'>
                    <div className='quiz-img'>
                        <img src={logo} alt="" />
                    </div>
                    <div className='quiz-details'>  
                        <h2>Name:{name}</h2>
                        <h4>Total:{total}</h4>
                        <Button className='cart-btn' onClick={()=>submit(id)}>Start Now </Button>
                    </div>
                 </div>
            </div>
    );
};

export default QuizeCart;