import './style.css';
import tomato from './../../../images/tomato.svg';
import hat from './../../../images/icon-chef.svg';
import ambient from './../../../images/icon-ambient.svg';
import calendar from './../../../images/icon-calendar.svg';

export const Diferenciais = () => {
    return (
        <section className="diferenciais">
            <h2>Nossos diferenciais</h2>
            <div className="diferential-list">

                <div className="diferential-list-item">
                    <img src={tomato} alt="" />
                    <h3>Ingredientes Frescos</h3>
                    <p>Selecionados diariamente para garantir o melhor sabor.</p>
                </div>
                <div className="diferential-list-item">
                    <img src={hat} alt="" />
                    <h3>Chef Especializado</h3>
                    <p>Receitas únicas criadas por nosso chef premiado.</p>
                </div>
                <div className="diferential-list-item">
                    <img src={ambient} alt="" />
                    <h3>Ambiente Aconchegante</h3>
                    <p>Espaço perfeito para momentos especiais.</p>
                </div>
                <div className="diferential-list-item">
                    <img src={calendar} alt="" />
                    <h3>Reserva Simples</h3>
                    <p>Garanta sua mesa com apenas alguns cliques.</p>
                </div>
            </div>

        </section>
    );
};


