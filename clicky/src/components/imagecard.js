import React from "react";

const ImagesCard = props => (
  <button>
      <img alt={props.name} src={props.image}/>
  //<span onClick={() => props.clicked(props.id)}></span>
  </button>
);

export default ImagesCard;

