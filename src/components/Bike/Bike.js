import React from 'react';
import './Bike.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';


const Bike = (props) => {
    const {name, seller,price,engine,power,torque,mileage,brakes,tyre,img } = props.bike
    return (
        <div className='col-md-4 g-0 col-12 mx-auto mt-4 bike'>
            <div className='padding'>
                <img className='img-fluid mb-2' src={img} alt="" />
                <h4>{name}</h4>
                <p>Price: {price}</p>
                <div className='row'>
                    <div className='col-4'>
                        {/* <FontAwesomeIcon icon={faMotorcycle}></FontAwesomeIcon> */}
                        <span>Engine</span>
                        <hr className='m-1' />
                        <p>{engine}</p>
                    </div>
                    <div className='col-4'>
                        {/* <FontAwesomeIcon icon={faMotorcycle}></FontAwesomeIcon> */}
                        <span>Power</span>
                        <hr className='m-1' />
                        <p>{power}</p>
                    </div>
                    <div className='col-4'>
                        {/* <FontAwesomeIcon icon={faMotorcycle}></FontAwesomeIcon> */}
                        <span>Torque</span>
                        <hr className='m-1' />
                        <p>{torque}</p>
                    </div>
                    <div className='col-4'>
                        {/* <FontAwesomeIcon icon={faMotorcycle}></FontAwesomeIcon> */}
                        <span>Mileage</span>
                        <hr className='m-1' />
                        <p>{mileage}</p>
                    </div>
                    <div className='col-4'>
                        {/* <FontAwesomeIcon icon={faMotorcycle}></FontAwesomeIcon> */}
                        <span>Brakes</span>
                        <hr className='m-1' />
                        <p>{brakes}</p>
                    </div>
                    <div className='col-4'>
                        {/* <FontAwesomeIcon icon={faMotorcycle}></FontAwesomeIcon> */}
                        <span>Tyre type</span>
                        <hr className='m-1' />
                        <p>{tyre}</p>
                    </div>

                </div>
                
            </div>
            <button>
                    <span>Add To Cart</span> 
                    <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>
                </button>
        </div>
    );
};

export default Bike;