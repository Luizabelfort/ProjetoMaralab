import style from "./SessaoSolucoes.module.css"
import { ObjetivoDeDesenvolvimentoSustentavel } from "./objetivoDeDesenvolvimentoSustentavel"
import quadradoVermelho from "../assets/quadradoVermelho.png"
import quadradoVinho from "../assets/quadradoVinho.png"
import quadradoLaranja from "../assets/quadradoLaranja.png"
import quadradoRosa from "../assets/quadradoRosa.png"
import quadradoAmarelo from "../assets/quadradoAmarelo.png"
import quadradoVerde from "../assets/quadradoVerde.png"
import fotoSessaoQuatro from "../assets/fotoSessaoQuatro.png"

export function SessaoSolucoes(){
    return(
        <section className={style.SessaoSolucoes}>
            <div className={style.fundo}>
                <div className={style.conectarSolucoes}>
                    <h2 className={style.h2ConectarSolucoes}>Conectamos soluções e experiências inovadoras ao ecossistema educacional.</h2>
                    <p className={style.pConectarSolucoes}>A MaraLab promove gestão eficiente, popularização da ciência e colaboração entre educadores, programas sociais e setores público e privado, fortalecendo ambientes mais inclusivos e colaborativos.</p>
                    <div className={style.imagensODS}>
                        <ObjetivoDeDesenvolvimentoSustentavel
                            imagem={quadradoVermelho}
                        />
                        <ObjetivoDeDesenvolvimentoSustentavel
                            imagem={quadradoVinho}
                        />
                        <ObjetivoDeDesenvolvimentoSustentavel
                            imagem={quadradoLaranja}
                        />
                        <ObjetivoDeDesenvolvimentoSustentavel
                            imagem={quadradoRosa}
                        />
                        <ObjetivoDeDesenvolvimentoSustentavel
                            imagem={quadradoAmarelo}
                        />
                        <ObjetivoDeDesenvolvimentoSustentavel
                            imagem={quadradoVerde}
                        />
                    </div>
                </div>
                <div className={style.estrategiasSolucoes}>
                    <div className={style.estrategiasSolucoes2}>
                        <h2 className={style.h2EstrategiasSolucoes}>Soluções estratégicas para professores</h2>
                        <p className={style.pEstrategiasSolucoes}>Plataforma que oferece mentorias em metodologias ágeis, conexões com stakeholders e feedbacks para impulsionar o crescimento da escola. Apoia professores no desenvolvimento de projetos educacionais, da ideia à implementação, com foco na captação de apoiadores e patrocinadores.</p>
                        <button>QUERO PARTICIPAR</button>
                    </div>
                    <img className={style.fotoSessaoQuatro} src={fotoSessaoQuatro} alt="" />
                </div>
            </div>
        </section>
    )
}