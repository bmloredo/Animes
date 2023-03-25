import React, { useRef, useState } from "react";
import { TooltipWrapper, TooltipTarget, TooltipBox } from "./tooltip.styled.js";
import { FaHeart } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

const Tooltip = ({
  title,
  averageRating,
  popularityRank,
  ratingRank,
  description,
  children,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const targetRef = useRef(null);
  const showTooltip = isHovered;

  const handleClick = (e) => {
    e.preventDefault();
    if (targetRef.current) {
      targetRef.current.blur();
    }
  };
  return (
    <TooltipWrapper>
      <TooltipTarget
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
        ref={targetRef}
      >
        {children}
      </TooltipTarget>
      {showTooltip && (
        <TooltipBox>
          <div>
            <h3>{title}</h3>
            <p className="average_rating">{averageRating}</p>
            <p className="popularity_rank">
              <FaHeart /> #{popularityRank} Mais Popular
            </p>
            <p className="rating_rank">
              <AiFillStar /> #{ratingRank} Melhor Classificado
            </p>
            <p className="description">{description ?? "Ótimo Anime"}</p>
          </div>
        </TooltipBox>
      )}
    </TooltipWrapper>
  );
};

export default Tooltip;
