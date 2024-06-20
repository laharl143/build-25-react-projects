/**
 * Project: Star Rating Component
 * Developer: Ed Duenas
 * Date Started: 6/20/2024
 * Date Finished: 6/20/2024
 */

import { useState } from "react";
import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
import "./styles.css";

export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (index) => setRating(index);
  const handleMouseEnter = (index) => setHover(index);
  const handleMouseLeave = () => setHover(rating);

  return (
    <div className="star-rating">
      {Array.from({ length: noOfStars }, (_, index) => {
        const starIndex = index + 1;
        return (
          <FaStar
            key={starIndex}
            className={starIndex <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(starIndex)}
            onMouseEnter={() => handleMouseEnter(starIndex)}
            onMouseLeave={handleMouseLeave}
            size={40}
          />
        );
      })}
    </div>
  );
}

StarRating.propTypes = {
  noOfStars: PropTypes.number,
};
