import React from "react";

//include images into your bundle
import bici from "../../img/bici.jpg"; 
import bus from "../../img/bus.jpg"; 
import metro from "../../img/metro.jpg"; 
import coche from "../../img/coche.jpg"; 

import Navbar from "./navbar";
import Card from "./card";
import Jumbotron from "./jumbotron";
import Footer from "./footer";

//create your first component
const Home = () => {
	const nombreApp= "Transport";

	return (
		<div className="text-center">
			<Navbar titulo={nombreApp} />
			<div className="container-fluid ps-5 pe-5 pb-5">
				<div>
					<Jumbotron/>
				</div>
				<div className="d-flex justify-content-between pt-3 container-fluid">
					<div className="row m-2">
						<div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 mb-3">
							<Card src={bici} titulo="Ir en bicicleta" description="Cuando montas en bicicleta mejora tu salud, tanto a nivel físico como mental." />
						</div>
						<div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 mb-3">
							<Card src={metro} titulo="Ir en metro" description="Su bajo consumo lo convierte en un modo de transporte respetuoso con el medio ambiente."/>
						</div>
						<div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 mb-3">
							<Card src={bus} titulo="Ir en bus" description="Asequible y disfrutas de las vistas."/>
						</div>
						<div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 mb-3">
							<Card src={coche} titulo="Ir en coche" description="Medio de transporte personal  y cómodo. Valioso en áreas donde el transporte público es limitado o poco eficiente."/>
						</div>
					</div>
				</div>
			</div>
			<Footer titulo={nombreApp} any="2024"  />
		</div>
	
	);
};

export default Home;
