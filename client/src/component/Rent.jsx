import React, { useEffect, useState } from 'react';
import EstateBox from './EstateBox';
import Searchsystem from './Searchsystem';
import axios from 'axios';

export default function Rent() {
  
  const [boxes,setBoxes] = useState([])
  const [req,setReq] = useState(true)

  useEffect(()=>{
    const link = "estate"
    axios.get(link)
    .then(function (response) {
      const estateData = response.data;
      setBoxes(estateData);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  },[])
  
  function handleSearch(searchData){
    const link = "search"
    axios.get(link, {
      params: {
        houseAddress:searchData.location,
        date:searchData.date,
        houseRent:searchData.price,
        estateType:searchData.estateType
      }
    })
    .then(function (response) {
      const estateData = response.data; 
      setBoxes(estateData);
      setReq(true);    
    })
    .catch(function (error) {
      console.log("err = ",error);
      setReq(false);
    })
    .then(function () {
      // always executed
    });  
  }
  let estateDetail = null;
  if(req){
    let index = 0;
    estateDetail = boxes.map((element)=>{
      return <EstateBox key = {++index} data = {element}/>
    })
  }else{
    estateDetail = "No such data Found"
  }

  return (
    <div className='rent'>
      <div className='renttop'>
        <h1>Search properties to rent</h1>
        <input type="search" name="search" id="search" placeholder='Search with search bar'/>
      </div>
      <Searchsystem search = {handleSearch}/>
      <div className='flex'>
        {estateDetail}
      </div>
    </div>
  )
}
