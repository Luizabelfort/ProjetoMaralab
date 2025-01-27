import style from "./SessaoContato.module.css"
import iconEmail from "../assets/iconEmail.png"
import iconTelefone from "../assets/iconTelefone.png"
import iconLocal from "../assets/iconLocal.png"
import googleMapa from "../assets/googleMapa.png"
import { Formulario } from "./Formulario"

export function SessaoContato(){
    return(
        <section className={style.SessaoContato}>
            <div className={style.divContato}>
                <div className={style.blocoInfoCont}>
                    <h2>Contato</h2>
                    <p className={style.pCont}> Dúvida ou quer saber mais sobre   como a MaraLab pode transformar a educação? Fale conosco!
                    </p>
                    <ul className={style.listaCont}>
                        <li>
                        <img src={iconEmail} alt="" />
                        <span>contact@company.com</span>
                        </li>
                        <li>
                        <img src={iconTelefone} alt="" />
                        <span>(123) 456 - 789</span>
                        </li>
                        <li>
                        <img src={iconLocal} alt="" />
                        <span>State Institute of Education, Science and Technology of Maranhao - IEMA</span>
                        </li>
                    </ul>
                    <a target="_blank" href="https://maps.app.goo.gl/9eDKi1vy6D55c9Pi6">
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