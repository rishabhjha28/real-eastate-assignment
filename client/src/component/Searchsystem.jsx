import React, { useState } from 'react'

export default function Searchsystem(props) {
    const [searchData,setSearchData] = useState({
        location:'',
        date:'',
        price:'',
        estateType:''
    })
    const handleChange = (event)=>{
        const {name, value} = event.target;
        if (name === 'price'){
            if (value >= 0){
                setSearchData((prev)=>{
                    return{
                        ...prev,
                        [name]:value
                    }
                })        
            }
        }
        else{
            setSearchData((prev)=>{
                return{
                    ...prev,
                    [name]:value
                }
            })
        }
    }

    const date = new Date();
    function formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }

    const handleSearch =(event)=>{
        event.preventDefault();
        props.search(searchData);

    }

    const minDate = formatDate(date);

  return (
    <div className="searchsystem">
        <form className = "searchsys" onSubmit={handleSearch}>
            <div className='cont'>
                <label htmlFor="location">Location</label>
                <input type="text" onChange={handleChange} name="location" id="location" value = {searchData.location}/>
            </div>
            <div className='cont'>
                <label htmlFor="date">When</label>
                <input type="date" name="date" id="date" value = {searchData.date} onChange={handleChange} min = {minDate}/>
            </div>
            <div className='cont'>
                <label htmlFor="price">Price</label>
                <input value = {searchData.price} onChange={handleChange} type="number" name="price" id="price" />
            </div>
            <div className='cont'>
                <label htmlFor="estateType">Property Type</label>
                <select value = {searchData.homeType} onChange={handleChange} id="estateType" name="estateType">
                    <option value="">Select</option>
                    <option value="Residential">Residential</option>
                    <option value="Plot">Plot</option>
                    <option value="Flat">Flat</option>
                    <option value="Commercial">Commercial</option>
                </select>
            </div>
            <div className='cont no-right-border'>
                <button>Search</button>
            </div>
        </form>
    </div>
  )
}
