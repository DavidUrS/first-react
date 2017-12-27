import React, { Component } from 'react';
import './css/App.css';


class Footer extends Component{
    render(){
        return (
            <footer className="App-footer">{element} {tiempoCompleto}</footer>
        );
    } 
}

// Funciones
function formatName(user) {
    return user.FirstName+' '+user.LastName;
}

function tiempo(time1,time2) {
    return time1+time2;
}

// Definicion de variables
const tiempos={
    time1 : 15,
    time2 : 21
}

const user={
    FirstName : 'David',
    LastName : 'Uribe'
}

// Compuestos
const tiempoCompleto=(
    <h2>Tienes, {tiempo(tiempos.time1,tiempos.time2)} Si ve los cambios que hago?</h2>
);

const element = (
    <h1>Hola, {formatName(user)}</h1>
);

export default Footer;