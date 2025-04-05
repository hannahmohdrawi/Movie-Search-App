import './css/App.css';
import Favourites from "./pages/Favourites";
import MovieCard from "./components/MovieCard";
import Home from "./pages/Home";
import {Routes, Route} from "react-router-dom";
import { MovieProvider } from './context/MovieContext';
import NavBar from "./components/NavBar";

export default function App() {

  return (
    <MovieProvider>
      <title>Movie App</title>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </main>
    </MovieProvider>
    
  )
}


