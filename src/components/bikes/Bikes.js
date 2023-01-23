import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Bike from '../Bike/Bike';
import Cart from '../Cart/Cart';
import './Bikes.css';

const Bikes = () => {
    const [bikes, setBikes] = useState([]);
    const [cart, setCart] = useState([]);
    const [lucky, setLucky] = useState([]);
    useEffect(()=>{
        fetch('bikeAPI.json').then(res=> res.json())
        .then(data=> setBikes(data));
    },[])
    const addToCart = (bike)=>{
        console.log('Clicked')
        let newCart = [];
        let mainCart = [];
        const exist = cart.find(data => data.id === bike.id);
        if(!exist){
            newCart = [...cart, bike];
        }
        else{
            newCart = [...cart, exist];
        }
        mainCart= newCart.filter((item, index)=> newCart.indexOf(item) === index)
        if(mainCart.length>4){
            alert('Not more than 4')
        }
        else{
            setCart(mainCart);
        }
        
    }
    const chooseBike=(bike)=>{
        console.log(bike)
        if(bike.length===0){
            alert('Plese select a bike');
        }
        else{
            const randomIndex = Math.floor(Math.random() * bike.length);
        
        
            const item = bike[randomIndex];

            console.log(item)
            setLucky(item);
        }
        
    
    }
    const resetAll = () =>{
         setCart({});
    }
    return (
        <div className='bikes row'>
            <div className='col-9 row'>
                {
                    bikes.map(bike=> <Bike bike={bike} key={bike.id} addToCart={addToCart} ></Bike>)
                }
            </div>
            <div className='col-3'>
                <Cart cart={cart} lucky = {lucky} chooseBike={chooseBike} resetAll={resetAll}></Cart>
            </div>
        </div>
    );
};

export default Bikes;