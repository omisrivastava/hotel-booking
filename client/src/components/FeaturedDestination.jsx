import React from "react";
import { roomsDummyData } from "../assets/assets.js";
import Hotelcard from "../components/Hotelcard.jsx";

const FeaturedDestination = () => {
  return (
    <div>
      <div>
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <Hotelcard key={room._id} room={room} index={index} />
        ))}
      </div>
      
    </div>
  );
};

export default FeaturedDestination;
