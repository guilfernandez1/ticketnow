import React from 'react';
import { Link } from 'react-router-dom';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import './styles.css';
import api from '../../services/api';

export default function Incidents() {
    return (
        <div className="incidents-container">
            <header>
                <a href="https://salaodoraapp.com.br">
                    <img src={logoImg} alt="DoraApp" />
                </a>
                <span>Bem-vindo, Guilherme</span>
                <Link className="button" to="/incidents/new"> Criar um incidente </Link>
            </header>
            <h1>Incidentes cadastrados</h1>
            <ul>
                <li>
                    <strong>TÍTULO:</strong>
                    <p>Falta de Shampoo no estoque</p>

                    <button onClick="" type="button">
                        <Link to="/incidents/update">
                            <FiEdit2 size={20} color="#a8a8b3" />
                        </Link>
                    </button>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Estamos com falta de shampoo no estoque faz algumas semanas</p>

                    <strong>STATUS:</strong>
                    <p>Pendente</p>

                    <button onClick="" type="button">
                        <FiTrash2 size={20} color="#a8a8b3" />
                    </button>
                </li>
            </ul>
        </div>
    );
}