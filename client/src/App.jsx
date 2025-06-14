import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Hero from "././components/Hero.jsx";

const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");
  return (
    <div>
      {!isOwnerPath && <Navbar />}
      <div>
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
