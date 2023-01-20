import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Bike from '../Bike/Bike';
import './Bikes.css';

const Bikes = () => {
    const [bikes, setBikes] = useState([]);
    useEffect(()=>{
        fetch('bikeAPI.json').then(res=> res.json())
        .then(data=> setBikes(data));
    },[])
    return (
        <div className='bikes row'>
            <div className='col-9 row'>
                {
                    bikes.map(bike=> <Bike bike={bike} key={bike.id}></Bike>)
                }
            </div>
            <div className='col-3'>
                <h4>Selected Clothes</h4>
                <button className='choose-btn'>Choose 1 For Me</button>
                <button className='reset-btn'>Reset All Item</button>
            </div>
        </div>
    );
};

export default Bikes;