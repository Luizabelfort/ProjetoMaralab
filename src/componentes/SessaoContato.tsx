import style from "./SessaoContato.module.css"
import iconEmail from "../assets/iconEmail.png"
import iconTelefone from "../assets/iconTelefone.png"
import iconLocal from "../assets/iconLocal.png"
import googleMapa from "../assets/googleMapa.png"
import grupoCirculoRoxRos from "../assets/grupoCirculoRoxRos.png"
import { Formulario } from "./Formulario"

export function SessaoContato(){
    return(
        <section id="Contato" className={style.SessaoContato}>
            <img className={style.grupoCirculoRoxRos} src={grupoCirculoRoxRos} alt="" />
            <div className={style.divContato}>
                <div className={style.blocoInfoCont}>
                    <h2>Contato</h2>
                    <p className={style.pCont}> Dúvida ou quer saber mais sobre   como a MaraLab pode transformar a educação? Fale conosco!
                    </p>
                    <ul className={style.listaCont}>
                        <li>
                        <img src={iconEmail} alt="" />
                        <span>contato@maralab.com.br</span>
                        </li>
                        <li>
                        <img src={iconTelefone} alt="" />
                        <span>(98) 98122-7391</span>
                        </li>
                        <li>
                        <img src={iconLocal} alt="" />
                        <span>Jardim Eldorado - São Luís/MA</span>
                        </li>
                    </ul>
                    <a target="_blank" href="https://maps.app.goo.gl/zZxXQtExkYhgZAPo9">
                        <img className={style.googleMapa} src={googleMapa} alt="" />
                    </a>
                </div>
                <div className={style.maeForm}>
                    <Formulario/>
                </div>
            </div>
        </section>
    )
}