import React from 'react';
import BikeInfo from '../Bike-info/BikeInfo';
import LuckyOne from '../luckyBike/LuckyOne';

const Cart = (props) => {
    const {cart,lucky, chooseBike,resetAll} = props;
    return (
        <div>
            <h4 className='mt-4'>Selected Clothes</h4>
            {
                cart.map(data => <BikeInfo key = {data?.id} data = {data}></BikeInfo>)
            }
            <LuckyOne key = {lucky?.id} lucky = {lucky}></LuckyOne>
            <button onClick={()=>chooseBike(cart)} className='choose-btn w-auto'>Choose 1 For Me</button>
            <button onClick={()=>resetAll()} className='reset-btn w-auto'>Reset All Item</button>
        </div>
    );
};

export default Cart;