// import React from "react";
import {PropTypes} from "prop-types";

export default function TravelCard ({title, location, googleMapsUrl, startDate, endDate, description, imageUrl,}) {
    //console.log(props.destination)
    return (
        <div className="card-container">
        
            <div className="tour-img-wrapper">
            <img src={imageUrl} alt="travel pic" 
            className="tour-img" />
            </div>
            
            <div className="textuals">
                <div className="location">
                    <i className="fa-solid fa-location-dot"></i>
                    <span className="country">{location}</span>
                    <a className="location-link" href={googleMapsUrl}>View on Google Maps</a>
                </div>
                <h3 className="title">{title}</h3>
                <div className="season"><span>{startDate}</span> - 
                <span>{endDate}</span>
                </div>
                <p className="description">{description}</p>
            </div>            
        </div>
    )
}

TravelCard.propTypes = {
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    location: PropTypes.string,
    description: PropTypes.string,
    googleMapsUrl: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
}