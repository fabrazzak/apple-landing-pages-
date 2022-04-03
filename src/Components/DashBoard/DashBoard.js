import React, { useEffect, useState } from 'react';
import useChart from '../../Hook/useReview/useChart';
import Chart from './Chart';


const DashBoard = () => {
 
    const [loadData,setLoadData]=useChart();
    const [data,setData]=useState([])
    
    
    
    return (
        <div className='container'>

            <h1>Rechart{loadData.length}</h1>
            {
                loadData.map(data => <Chart data={data} key={data.sell}></Chart>)
            }
                   
            
        </div>
    );
};

export default DashBoard;