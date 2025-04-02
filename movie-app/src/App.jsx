import './App.css'
import MovieCard from "./components/MovieCard";

function App() {
  const movieNumber = 2;

  return (
    <>
      {movieNumber === 1 ? (
        <MovieCard movie={{title: "Hannah's Film", release_date:"2025"}}/>
      ) : (
      <MovieCard movie={{title: "Mike's Film", release_date:"2025"}}/>
      )}
    </>
  )
}

export default App
