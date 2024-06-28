//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";


// incluye tus estilos en el paquete, the webpack bundle
import "../styles/index.css";

//importa tus propios componentes
import Home from "./component/home.jsx";



//renderiza tu aplicacion de react
//ReactDOM.createRoot(document.getElementById('index')).render(<Home/>);
ReactDOM.createRoot(document.getElementById('app')).render(<Home/>);

