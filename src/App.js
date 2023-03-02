import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Search from "./pages/Search";
import Lists from "./pages/Lists";

import RatingChart from "./components/RatingChart";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search/:query" element={<Search />} />
      <Route path="/movieDetails/:id" element={<MovieDetails />} />
      <Route path="/myLists" element={<Lists />} />
      <Route path="/chart" element={<RatingChart />} />
    </Routes>
  );
}

export default App;
