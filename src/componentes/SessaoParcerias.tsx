import style from "./SessaoParcerias.module.css"
import logoIEMA from "../assets/logoIEMA.png"
import logoNats from "../assets/logoNats.png"


export function SessaoParcerias(){
    return(
        <section className={style.SessaoParcerias}>
            <div className={style.grupoParcerias}>
                <h2>Parceiros & Apoiadores</h2>
                <div className={style.grupoPArcIMg}>
                    <img className={style.PArcIMg} src={logoIEMA} alt="" />
                    <img className={style.PArcIMg} src={logoNats} alt="" />
                </div>
            </div>
        </section>
    )
}