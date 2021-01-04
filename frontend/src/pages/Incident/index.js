import React from 'react';
import { Link } from 'react-router-dom';
import  { FiArrowLeft } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg';
import './styles.css';

export default function Incident() {
    return (
        <div className="incident-container">
            <div className="header-container">
            <header>
                <div>
                    <a href="https://salaodoraapp.com.br">
                        <img src={logoImg} alt="DoraApp" />
                    </a>
                    <span>Bem-vindo, Guilherme</span>
                </div>
            </header>
            </div>
            <div className="content">
                <section>
                    <h1>Cadastrar novo incidente</h1>
                    <p>Descreva o incidente detalhadamente nos campos abaixo.</p>
                    <Link className="back-link" to="/incidents">
                        <FiArrowLeft size={16} color="#fff" />
                        Voltar para home
                    </Link>
                </section>
                <form onSubmit="">
                    <input
                        placeholder="Título do incidente"
                        onChange=""
                    />
                    <textarea
                        placeholder="Descrição"
                        onChange=""
                    />
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}