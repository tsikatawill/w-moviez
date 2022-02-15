import React, { useEffect } from "react";

const MovieCard = ({ imgLink, title, vote_average, style }) => {
  const [ratingBg, setRatingBg] = React.useState("");
  useEffect(() => {
    const handleBg = (vote_average) => {
      if (vote_average > 7) {
        setRatingBg("success");
      } else if (vote_average > 4.5) {
        setRatingBg("warning");
      } else {
        setRatingBg("danger");
      }
    };
    handleBg(vote_average);
  }, [vote_average]);

  return (
    <div className="movie-card" style={style}>
      <img
        src={`${
          imgLink
            ? process.env.REACT_APP_TMDB_IMAGE_URL + imgLink
            : "data:image/png;base64,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"
        }`}
        alt="movie"
      />
      <div
        className="text bg-black text-white d-flex justify-content-between align-items-center p-2"
        style={{ borderRadius: "10px", transform: "translateY(-10px)" }}
      >
        <p className="p-0 m-0">{title}</p>
        <span
          className={`fw-bold p-1 bg-${ratingBg}  m-0`}
          style={{ borderRadius: "3px" }}
        >
          {vote_average}
        </span>
      </div>
    </div>
  );
};

MovieCard.defaultProps = {
  title: "Default Movie Title",
  imgLink:
    "data:image/png;base64,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",
  vote_average: 8.5,
};

export default MovieCard;
