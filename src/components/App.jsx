// import React from "react";
import {data} from '../assets/data';
import Navbar from './Navbar';
import TravelCard from "./TravelCard";
import './style.css'

export default function App () {
    // console.log(data)
    const hotDestinations = data.map(({ id, title, location, googleMapsUrl, startDate, endDate, description, imageUrl }) => {
        return <TravelCard 
            key ={id}
            id ={id}
            tittle={title}
            location={location}
            googleMapsUrl={googleMapsUrl}
            startDate={startDate}
            endDate={endDate}
            description={description}
            imageUrl ={imageUrl}
        />
    })
    
    return (
        <div className='app'>
            <Navbar />
            {hotDestinations}
        </div>
    )
}