import React, { useEffect } from "react";

const MovieCard = ({ imgLink, title, vote_average }) => {
  const [ratingBg, setRatingBg] = React.useState("");
  useEffect(() => {
    const handleBg = (vote_average) => {
      switch (vote_average) {
        case vote_average > 7:
          setRatingBg("success");
          break;
        case vote_average > 4:
          setRatingBg("warning");
          break;

        default:
          setRatingBg("danger");
          break;
      }
    };
    handleBg();
  }, []);

  return (
    <div className="movie-card">
      <img src={imgLink} alt="movie" />
      <div className="text bg-black text-white d-flex justify-content-between align-items-center p-2">
        <p className="p-0 m-0">{title}</p>
        <span className={`fw-bold p-1 bg-${ratingBg}  m-0`}>
          {vote_average}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
