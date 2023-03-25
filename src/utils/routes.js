import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnimePage from "../pages/AnimePage/animePage";
import Categories from "../pages/Categories/categories";
import Home from "../pages/Home/home";
import SpecificAnime from "../pages/EspecificAnime/SpecificAnime";
import AllAnimes from "../pages/AllAnimes/AllAnimes";

const Routers = ({ location }) => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/anime" exact element={<AnimePage />} />
          <Route path="/especific" exact element={<SpecificAnime />} />
          <Route path="/all" exact element={<AllAnimes />} />
          <Route
            path={location.pathname}
            exact
            element={<Categories location={location.pathname} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routers;
