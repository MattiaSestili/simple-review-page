import { Fragment, useState } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface StarRatingProps {
  rated?: number;
  onRated?: (rating: number) => void;
  isCommentSection: boolean;
}

export const StarRating = (props: StarRatingProps) => {
  const [rating, setRating] = useState(props.rated ?? 0);
  const [hover, setHover] = useState(0);

  const onButtonChanged = (index: number) => {
    if (props.onRated) {
      props.onRated(index);
    }
    setRating(index);
  };

  return (
    <div className="star-rating" style={{ pointerEvents: props.isCommentSection ? "none" : "all" }}>
      {[...Array(5)].map((_, index) => {
        index += 1;
        return (
          <Fragment key={index}>
            <Button
              id={"star-btn"}
              className={index <= (hover || rating) ? "on" : "off"}
              onClick={() => onButtonChanged(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}>
              <FontAwesomeIcon icon={faStar} />
            </Button>
          </Fragment>
        );
      })}
    </div>
  );
};
