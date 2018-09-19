import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
      <div className="img-container hvr-pulse">
        <img onClick={()=> props.handleClick(props.id)} id ={props.id} alt={props.name} src={props.image} style={{width: 200, height: 165 }} />
      </div>
);

export default FriendCard;

  // <div role="img" aria-label="click item" class="click-item shake" 
  // style="background-image: url(&quot;/assets/images/evilmorty.png&quot;);"></div>