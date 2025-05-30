import style from "./SessaoDoacao.module.css"
import eclipseRoxo from "../assets/eclipseRoxoEscuro.png"
import grupoCirculoImagem from "../assets/grupoCirculoImagem.png"
import grupoCirculo from "../assets/grupoCirculo.png"
import iconeBeleza from "../assets/iconBeleza.png"
import iconePessoas from "../assets/iconPessoas.png"
import { BlocoDoacao } from "./BlocoDoacao"

export function SessaoDoacao(){
    return(
        <section className={style.sessaoDoacao}>
            <div className={style.teste}>
                <img className={style.eclipseRoxo} src={eclipseRoxo} alt="Eclipse Roxo" />
                <img className={style.grupoCirculo} src={grupoCirculo} alt="" />
            </div>
            <div className={style.grupo}>
                <div className={style.blocoInfo}>
                    <h2>Faça parte da Economia de Compartilhamento!</h2>
                    <h3>Doe e compartilhe diversos itens para laboratórios escolares de todo o Brasil.</h3>
                    <div className={style.blocoDoacao}>
                        <BlocoDoacao
                        imagem={iconeBeleza}
                        texto="Nossos parceiros são fundamentais para impulsionar o impacto
social."
                        />
                        <BlocoDoacao
                        imagem={iconePessoas}
                        texto="Cadastre sua escola ou organização e mude a realidade de toda uma comunidade!"
                        />
                    </div>
                    <div className={style.btnDoarReceber}>
                        <button className={style.doar}>QUERO DOAR</button>
                        <button className={style.receber}>QUERO RECEBER</button>
                    </div>
                </div>
                <img className={style.grupoCirculoImagem} src={grupoCirculoImagem} alt="" />
            </div>
        </section>
    )
}