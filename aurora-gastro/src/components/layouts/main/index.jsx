import illustrationMain from './../../../images/illustration-main.svg';
import './style.css';
export const Main = () => {
  return (
      <>
  <main>
  <div className="content-main">
    <h1>A <span>melhor experiência</span> gastronômica da cidade</h1>
    <p>Pratos frescos, preparados com ingredientes selecionados e finalizados com o toque especial do nosso chef, garantindo sabor e qualidade em cada mordida. </p>
    <div className='buttons-main'> 

<a href="" className='left-button'>Peca agora </a>
<a href="" className='right-button'>Saiba mais </a>

    </div>
  </div>
  <img src={illustrationMain} alt="" />
  </main>
  
  </>
  )

  
}