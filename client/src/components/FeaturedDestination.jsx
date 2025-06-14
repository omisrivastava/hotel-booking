import { roomsDummyData } from "../assets/assets.js";
import Hotelcard from "../components/Hotelcard.jsx";

const FeaturedDestination = () => {
  return (
    <div>
      <div className="mx-10 flex flex-wrap gap-10 mt-10">
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <Hotelcard key={room._id} room={room} index={index} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedDestination;
