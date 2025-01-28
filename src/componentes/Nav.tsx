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
                    <a href="#">Início</a>
                </li>
                <li className={style.itemDaLista}>
                    <a href="#">Sobre Nós</a>
                </li>
                <li className={style.itemDaLista}>
                    <a href="#">Soluções</a>
                </li>
                <li className={style.itemDaLista}>
                    <a href="#">Parceiros</a>
                </li>
                <li className={style.itemDaLista}>
                    <a href="#">Contato</a>
                </li>
            </ul>
            <button className={style.botaoDaNav}>ÁREA DO CLIENTE</button>
        </nav>
    )
}