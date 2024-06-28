import React from "react";



//create your component
const Footer = (props) => {
	return (
			<div className="d-flex bg-dark justify-content-center pt-3" style={{color:"white"}}>
                <p>@</p>
                <p>{props.titulo}</p>
                <p>{props.any}</p>

            </div>
	);
};

export default Footer;