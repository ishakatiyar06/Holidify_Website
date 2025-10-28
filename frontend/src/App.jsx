import { Navigate, Route, Routes } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Main from "./Pages/Main/Main";
import Home from "./Pages/Home/Home";
// import Dalhousie from "./Pages/Cities/Dalhousie/Dalhousie";
// import PlacesTovisit from "./Pages/Cities/Dalhousie/PlacesTovisit";
// import BestTime from "./Pages/Cities/Dalhousie/BestTime";
// import Food from "./Pages/Cities/Dalhousie/Food";
import PlacesTovisit from "./Pages/City/PlacesTovisit";
import BestTime from "./Pages/City/BestTime";
import Food from "./Pages/City/Food";

import Overview from "./Pages/City/Overview";
import CityHome from "./Pages/City/CityHome";
import ProctectedRoute from "./Pages/ProctectedRoute";
import Reviews from "./Pages/City/Reviews";
import Aboutus from "./Pages/Aboutus/Aboutus";
import Features from "./Pages/Features/Features";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path="home" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/features" element={<Features />} />

        <Route index element={<Navigate replace to="/home" />} />
        <Route path="/" element={<ProctectedRoute />}>
          <Route path="/:cityname" element={<CityHome />}>
            <Route index element={<Navigate replace to="overview" />} />
            <Route path="placestovisit" element={<PlacesTovisit />} />
            <Route path="overview" element={<Overview />} />
            <Route path="besttime" element={<BestTime />} />
            <Route path="food" element={<Food />} />
            <Route path="review" element={<Reviews />} />
          </Route>
        </Route>
      </Route>

      <Route path="login" element={<Login />}></Route>
      <Route path="register" element={<Register />}></Route>
    </Routes>
  );
}

export default App;
