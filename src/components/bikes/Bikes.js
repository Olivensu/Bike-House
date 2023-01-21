import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Bike from '../Bike/Bike';
import Cart from '../Cart/Cart';
import './Bikes.css';

const Bikes = () => {
    const [bikes, setBikes] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('bikeAPI.json').then(res=> res.json())
        .then(data=> setBikes(data));
    },[])
    const addToCart = (bike)=>{
        console.log('Clicked')
        let newCart = [];
        const exist = cart.find(data => data.id === bike.id);
        if(!exist){
            newCart = [...cart, bike];
        }
        else{
            newCart = [...cart, exist];
        }
        setCart(newCart);
    }
    const chooseBike=(bike)=>{

    }
    const resetAll = (bike) =>{
         
    }
    return (
        <div className='bikes row'>
            <div className='col-9 row'>
                {
                    bikes.map(bike=> <Bike bike={bike} key={bike.id} addToCart={addToCart} chooseBike={chooseBike} resetAll={resetAll}></Bike>)
                }
            </div>
            <div className='col-3'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Bikes;