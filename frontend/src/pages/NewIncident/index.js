import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';

import logoImg from '../../assets/logo.svg'

export default function NewIncident() {
    return(
        <div className="container-new-incident">
        <div className="content">
            <section>
                <img src={logoImg} alt="logo" />
                <h1>Cadastrar novo caso</h1>
                <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                <Link className="back-link" to="/profile">
                    <FiArrowLeft size={16} color="#e02041" />
                    Voltar para home
                </Link>
            </section>
            <form>
                <input type="text" placeholder="Título do Caso"/>
                <textarea placeholder="Descrição"></textarea>
                <input type="text" placeholder="Valor em reais"/>

                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
    )
}