import React from 'react';
import './LuckyOne.css'

const LuckyOne = (props) => {
    console.log (props)
    const {name, img, price} = props?.lucky
    return (
        <div className='row g-0 bikeinfo'>
              {
              name?<h5 className='bg-warning my-3 p-1'>This is your lucky bike...</h5>:<h5>Empty</h5>
              }
              
              {/* {
                if({name}){
                    <h5>This is your lucky bike...</h5>
                }
                else{
                    <h5>Empty</h5>
                }
              } */}
            <img className='col-4 g-0' src={img} alt="" />
            <div className='col-8 g-0'>
                <h5>{name}</h5>
                <p>{price}</p>
            </div>
        </div>
    );
};

export default LuckyOne;