import React from 'react';
import './Bike-info.css'

const BikeInfo = (props) => {
    const {name, img, price} = props.data
    return (
        <div className='row g-0 bikeinfo'>
            <img className='col-4 g-0' src={img} alt="" />
            <div className='col-8 g-0'>
                <h5>{name}</h5>
                <p>{price}</p>
            </div>
        </div>
    );
};

export default BikeInfo;