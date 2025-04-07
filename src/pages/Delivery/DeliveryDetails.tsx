import React, { useEffect, useState } from 'react';
import './DeliveryDetails.css';
import { useLocation } from 'react-router-dom';

const DeliveryDetails = ({ details, time }) => {
  return (
    <div className="delivery-container">
      <h2 className="delivery-title">Delivery Details</h2>
      <div className="delivery-info">
        <div className="info-item">
          <label>Full name:</label>
          <span>{details.name}</span>
        </div>
        <div className="info-item">
          <label>Email:</label>
          <span>{details.email}</span>
        </div>
        <div className="info-item">
          <label>Address:</label>
          <span>{details.address}</span>
        </div>
  
        <div className="info-item">
          <label>Payment method:</label>
          <span>{details.method??"Payment on Delivery"}</span>
        </div>
        <div className="info-item">
          <label>Expected Time of Arrival:</label>
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
};

const DeliveryPage = () => {
  let { state: details } = useLocation();
const [time, setTime] = useState("00:00:00")
  useEffect(()=>{
    async function getRoute() {
      const response = await fetch(`http://localhost:3000/maps`,
        {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            "destination":{
              "placeId": details.placeId
            }
          })
        }
      );
      
      if (!response.ok) return time;
      const data = await response.json();
      const durationInSec = parseInt(data.routes[0].duration);
      console.log({durationInSec})
      const timeInMs = Date.now() + durationInSec *1000;
      const date = new Date(timeInMs);
      const timeAsString = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
      console.log({timeInMs})
      setTime(timeAsString);
      console.log({timeAsString})
    }

    getRoute();
  }, [])
  return <DeliveryDetails details={details} time={time} />;
};

export default DeliveryPage;
