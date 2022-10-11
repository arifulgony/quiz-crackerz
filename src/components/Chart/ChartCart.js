import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar,  XAxis,  Tooltip,} from 'recharts';
const ChartCart = () => {
    const [chart, setChart] = useState([]);
    useEffect(() =>{
      axios.get('https://openapi.programming-hero.com/api/quiz')
      .then(data =>{
        const charts= data.data;
        const chartsh =charts.map(char => {
            //  const parts = char.slug.split('-');
            //  const total =parseInt(parts[1]);
            const singleChart ={
                name: char.name,
               // total: total
            }
            return singleChart
        })
        setChart(chartsh)
      } )

    },[])
    return (
        <BarChart width={500} height={200} data={chart}>
          <Bar dataKey="total" fill="#8884d8" />
          
          <XAxis dataKey="name" />
          <Tooltip />
        </BarChart>
        
    );
};


export default ChartCart;