import React from "react";
import PropTypes from 'prop-types';


const Card = (props) => {
  return (
    <div className="card w-100">
      <img src={props.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.cardTitle}</h5>
        <p className="card-text">{props.cardText}</p>
        <p className="card-text">
          <small className="text-muted">{props.updatedTime}</small>
        </p>
      </div>
    </div>
  );
};

Card.defaultProps = {
    cardTitle: "Default Card Title"
}

Card.propTypes = {
    cardText: PropTypes.string.isRequired
}

export default Card;
