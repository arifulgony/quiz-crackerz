import React from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";
import { useLoaderData } from 'react-router-dom';
import './chart.css'


const Chat = () => {
    const quiz = useLoaderData();
    return (
        <div className='quiz-container'>
        <LineChart width={400} height={400} data={quiz.data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
        </div>
    );
};

export default Chat;