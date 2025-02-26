import { createContext, useState } from "react";
import PropsType from "prop-types";
import YouTube from "react-youtube";
import Modal from "react-modal";

const opts = {
  //   height: "390",
  //   width: "640",
  height: "100%",
  width: "100%",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
  },
};
const MovieContext = createContext();
const MovieProvider = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [trailerKey, setTrailerKey] = useState("");
  const [movieDetails, setMovieDetails] = useState(null);

  const fetchMovieDetails = async (id) => {
    try {
      const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
      setMovieDetails(data);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  const handleTrailer = async (id) => {
    setTrailerKey("");
    try {
      const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };

      const movieKey = await fetch(url, options);
      const data = await movieKey.json();

      setTrailerKey(data.results[0].key);
      await fetchMovieDetails(id);
      setModalIsOpen(true);
    } catch (error) {
      setModalIsOpen(false);
      console.log(error);
    }
  };

  return (
    <MovieContext.Provider value={{ handleTrailer }}>
      {children}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            position: "fixed",
            zIndex: 9999,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          },
          content: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "95%",
            maxWidth: "1200px",
            height: "100%",
            maxHeight: "90vh",
            padding: "20px",
            background: "#000",
            border: "none",
            borderRadius: "10px",
            color: "#fff",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          },
        }}
        contentLabel="Movie Details"
      >
        {/* Left Section - Movie Details */}
        <div
          style={{
            flex: 1.5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            paddingBottom: "56.25%", // Maintain 16:9 aspect ratio
            height: "0",
            width: "100%",
          }}
        >
          {trailerKey ? (
            <YouTube
              videoId={trailerKey}
              opts={{ ...opts, width: "100%", height: "100%" }}
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
              }}
            />
          ) : (
            <p>No trailer available</p>
          )}
        </div>

        {/* Right Section - Centered Video */}
        {movieDetails && (
          <div className="flex-1 pl-5 text-white">
            <h1 className="text-5xl font-bold text-center text-red-600 mb-2">
              {movieDetails.title}
            </h1>
            <hr className="border border-white my-3" />
            <p>
              <strong>Genre:</strong>{" "}
              {movieDetails.genres?.map((g) => g.name).join(", ")}
            </p>
            <p>
              <strong>Release Date:</strong> {movieDetails.release_date}
            </p>
            <p>
              <strong>Running Time:</strong> {movieDetails.runtime} minutes
            </p>
            <p>
              <strong>Language:</strong>{" "}
              <span className="uppercase">
                {movieDetails.original_language}
              </span>
            </p>
            <p>
              <strong>Overview:</strong> {movieDetails.overview}
            </p>
            <div className="pt-5">
              <button className="px-5 py-2 text-sm font-bold text-white uppercase bg-red-700 rounded hover:bg-red-800 transition">
                Booking
              </button>
              <button className="px-5 py-2 text-sm font-bold text-white uppercase bg-red-700 rounded hover:bg-red-800 transition">
                Booking
              </button>
            </div>
          </div>
        )}
      </Modal>
    </MovieContext.Provider>
  );
};

MovieProvider.propsTypes = {
  children: PropsType.node,
};

export { MovieProvider, MovieContext };
