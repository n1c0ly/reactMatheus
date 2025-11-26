import { CardDifference } from "../../cardDifferences"
import iconChef from '../../../images/icon-chef.svg'
import iconAmbient from '../../../images/icon-ambient.svg'
import tomato from '../../../images/tomato.svg'
import iconCalendar from '../../../images/icon-calendar.svg'
import './style.css'

export const SectionDifferences = () => {
    return (
        <section className="section-differences">
            <h2>Nossos <span>Diferenciais</span></h2>
            <div className="container-card-difference">
                <CardDifference
                    img={tomato}
                    titulo="Ingredientes Frescos"
                    paragrafo="Selecionados diariamente para garantir o melhor sabor."
                />
                <CardDifference
                    img={iconChef}
                    titulo="Chef Especialista"
                    paragrafo="Receitas elaboradas por chefs renomados."
                />
                <CardDifference
                    img={iconAmbient}
                    titulo="Ambiente Aconchegante"
                    paragrafo="Um espaço pensado para seu conforto."
                />
                <CardDifference
                    img={iconCalendar}
                    titulo="Reservas Antecipadas"
                    paragrafo="Garanta seu lugar com antecedência."
                />
            </div>
        </section>
    )
}