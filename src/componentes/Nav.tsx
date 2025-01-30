import style from "./Nav.module.css"
import logoMaralab from "../assets/logoMaralab.png"

export function Nav(){
    return(
        <nav className={style.nav}>
            <div className={style.talvez}>
                <img className={style.logoMaralab} src={logoMaralab} alt="" />
            </div>
            <ul className={style.listaDaNav}>
                <li className={style.itemDaLista}>
                    <a href='#Header'>Início</a>
                </li>
                <li className={style.itemDaLista}>
                    <a href="#beneficios">Sobre Nós</a>
                </li>
                <li className={style.itemDaLista}>
                    <a href="#Solucoes">Soluções</a>
                </li>
                <li className={style.itemDaLista}>
                    <a href="#parcerias">Parceiros</a>
                </li>
                <li className={style.itemDaLista}>
                    <a href="#Contato">Contato</a>
                </li>
            </ul>
            <button className={style.botaoDaNav}>ÁREA DO CLIENTE</button>
        </nav>
    )
}