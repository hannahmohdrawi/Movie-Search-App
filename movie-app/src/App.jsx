import './App.css'
import Favourites from "./pages/Favourites";
import MovieCard from "./components/MovieCard";
import Home from "./pages/Home";
import {Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";

export default function App() {

  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </main>
    </div>
    
  )
}


