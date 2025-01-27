import style from "./SessaoRealizacoes.module.css"
import fotoGrupo from "../assets/fotoGrupo.png"
export function SessaoRealizacoes(){
    return(
        <section className={style.SessaoRealizacoes}>
            <div className={style.grupoRealizacoes}>
                <div className={style.blocoInfoRealz}>
                    <h2>Nossas Realizações!</h2>
                    <p>Estamos constantemente em busca de novas formas de conectar educadores e promover a transformação na educação. Nosso compromisso é com a inovação e a colaboração, sempre focados em fortalecer o ecossistema educacional.</p>
                </div>
                <img className={style.fotoGrupo} src={fotoGrupo} alt="" />
            </div>
        </section>
    )
}