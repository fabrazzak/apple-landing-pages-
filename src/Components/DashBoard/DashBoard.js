import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Sankey, Tooltip, XAxis, YAxis } from 'recharts';
import useChart from '../../Hook/useReview/useChart';
import Chart from './Chart';


const DashBoard = () => {
    const [loadData,setLoadData]=useChart();
    return (
        <div className='container '>
            <div className="row py-5 m-auto">
                <h1 className='mb-5'>Chart No : 1</h1>
                <div className="col-lg-9 m-auto">
                    <LineChart width={800} height={400} data={loadData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="" dataKey="sell" stroke="red" />
                        <Line type="" dataKey="investment" stroke="blue" />
                        <Line type="" dataKey="revenue" stroke="green" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip></Tooltip>
                    </LineChart>
                 </div>
            </div>
            <div className="row py-5 m-auto">
                <h1 className='mb-5'>Chart No : 2</h1>
                <div className="col-lg-9 m-auto">
                   <AreaChart width={800} height={400} data={loadData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                         <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                         <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                    </linearGradient>
                    </defs>
                  
                    <XAxis dataKey="month" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monoton" dataKey="revenue" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monoton" dataKey="sell" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="investment" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                   </AreaChart>
                 </div>
            </div>
            <div className="row py-5 m-auto">
                <h1 className='mb-5'>Chart No : 3</h1>
                <div className="col-lg-9 m-auto">
                <BarChart width={800} height={400} data={loadData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="investment" fill="#8884d8" />
                <Bar dataKey="revenue" fill="green" />
                <Bar dataKey="sell" fill="#82ca9d" />
                </BarChart>
                 </div>
            </div>
            

           
        </div>
    );
};

export default DashBoard;

