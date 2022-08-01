import React from 'react'
import { BiBed } from 'react-icons/bi';
import { AiOutlineAreaChart } from 'react-icons/ai';
import { MdOutlineBathroom } from 'react-icons/md';
import PopularTag from './PopularTag';



export default function EstateBox(prop) {
  return (
    <div className='estateBox'>
        <div className="img">
          <img src={prop.data.imgLink} alt="estateImage"  />
        </div>
        {prop.data.isPopular && <PopularTag/>}
        <div className="noimg">
          <div className="boxTextArea">
              <p>
                  <span className="price">${prop.data.houseRent}</span>
                  <span className="time">/month</span>
              </p>
              <h3>{prop.data.houseName}</h3>
              <p className='address'>{prop.data.houseAddress}</p>
          </div>
          <div className="extraDetails">
            <span><span className='icon'> <BiBed/> </span><span className='text'>{prop.data.noOfBedRoom} beds</span></span>
            <span><span className='icon'> <MdOutlineBathroom/> </span><span className='text'>{prop.data.noOfBathroom} Bathrooms</span></span>
            <span><span className='icon'> <AiOutlineAreaChart/> </span><span className='text'>{prop.data.houseLength}x{prop.data.houseBreadth}m<sup>2</sup></span></span>
          </div>
        </div>
    </div>
  )
}
