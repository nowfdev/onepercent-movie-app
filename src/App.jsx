import { useState, useEffect } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import MovieList from "./components/MovieList";

function App() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const url =
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
    };
    fetchMovie();
  }, []);
  return (
    <>
      <div className="bg-black pb-10">
        <Header />
        <Banner />
        <MovieList title={"Treding"} />
        <MovieList title={"Recommendation"} />
      </div>
    </>
  );
}

export default App;
