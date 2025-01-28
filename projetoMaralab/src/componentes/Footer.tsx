import style from './Footer.module.css'

import logoMaralabFoo  from '../assets/logoMaralab.png'
import iconInsta from '../assets/iconInstagram.png'
import inconLinkedin  from '../assets/iconLinkedIn.png'
import iconYoutube  from '../assets/iconYouTube.png'

export function Footer(){
    return(
        <footer className={style.footer}>
            <div className={style.grupoFoo}>
                <div className={style.miniGrupoFoo}>
                 <img className={style.logoMaralabFoo} src={logoMaralabFoo} />
                    <ul className={style.listaFoo}>
                        <li>Sobre Nós</li>
                        <li>Soluções</li>
                        <li>Parceiros</li>
                    </ul>
                    <div className={style.imgsFoo}>
                        <a target='_blank' href="https://www.instagram.com/maralabedu/"><img src={iconInsta}/></a>
                        <a target='_blank' href="https://www.linkedin.com/company/maralab/"> <img src={inconLinkedin}/></a>
                        <a target='_blank' href="https://www.youtube.com/@adryandcoelho"> <img src={iconYoutube} /></a>
                    </div>
                </div>    
                <hr  className={style.hr}/>
                <span className={style.direitosRe} >© 2024. Todos os Direitos Reservados.</span>
            </div>
        </footer>
    )
}