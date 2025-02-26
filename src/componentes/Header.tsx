import style from './Header.module.css'
import foto from '../assets/FotoSessaoUm.png'
import BlocoCirculoAzVe from "../assets/BlocoCirculoAzVe.png"
import BlocoCirculoRoxRos from "../assets/BlocoCirculoRoxRos.png"

export function Header(){
    return(
    <header id='Header'>
        <img className={style.BlocoCirculoAzVe} src={BlocoCirculoAzVe} alt="" />
        <div className={style.Grupo}>
        <img className={style.foto} src={foto}alt="" />
        <div className={style.blocoTexto}>
        <h1>Conectando experiências para transformar a educação!</h1>
        <p>Atuamos na gestão de laboratórios e economia compartilhada, promovendo equidade, conexão e impacto social no ecossistema educacional.</p>
        <button className={style.botaodaHeader}>AGENDAR DEMONSTRAÇÃO</button>
        </div>
        </div>
        <img className={style.BlocoCirculoRoxRos} src={BlocoCirculoRoxRos} alt="" />
        
    </header>
    )
}