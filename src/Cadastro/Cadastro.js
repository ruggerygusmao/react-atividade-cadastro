import React from "react";
import logo from '../logo.svg';
import "./Cadastro.css"

export default function Cadastro(){

    return (
        <>
            <div className="container">
                <div className="item1">
                        <div className="titulo">   
                            <h3>Cadastro</h3>
                            <p>Preencha os dados abaixo para começar.</p>
                        </div>

                        <input type="text" placeholder="Nome" />
                        <input type="text" placeholder="Sobrenome" />
                        <input type="e-mail" placeholder="E-mail" />
                        <input type="password" placeholder="Senha" />
                  
                        <button className="botao">Concluir cadastro</button>
                </div>

                <div className="item2">
                    <img className="App-logo" src={logo} alt="logo.png"></img>
                    <h1>App React</h1>
                </div>      
            </div>
        </>
    );
}