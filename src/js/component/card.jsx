import React from "react";



//create your component
const Card = (props) => {
	return (

			<div className="card" style={{width:250}}>
        <img src={props.src} className="card-img-top" alt="imagen bicicleta" />
        <div className="card-body">
          <h5 className="card-titulo">{props.titulo}</h5>
          <p className="card-text text-start">{props.description}</p>
        </div>
          <div class="card-footer">
           <a href="#" className="btn btn-primary">Go</a>
          </div>
        
      </div>
			
	);
};

export default Card;