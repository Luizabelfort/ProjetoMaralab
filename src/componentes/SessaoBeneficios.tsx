import style from "./SessaoBeneficios.module.css"
import {BlocoBeneficios} from "./BlocosBeneficios"
import Relogio from "../assets/relogio.png"
import Seta from "../assets/setaCima.png"
import Segurança from "../assets/iconSegurança.png"
import Folha from "../assets/iconFolha.png"

export function SessaoBeneficios(){
    return(
    <section  id="beneficios" className={style.sectionBeneficios}>
        <span className={style.spanBeneficios}>Descomplicando a Educação!</span>
        <h2 className={style.h2Beneficios}>Toda gestão de Laboratórios Educacionais em um só lugar.</h2>
        <div className={style.divBeneficios}>
            <BlocoBeneficios
            src= {Relogio}
            titulo= "Diminuição na Burocracia"
            paragrafo="Solicitações mais rápidas e acompanhamentos de forma eletrônica" 
            />
            <BlocoBeneficios
            src={Seta}
            titulo="Aumento na produtividade"
            paragrafo="Processos eletrônicos dinâmicos e acesso contínuo. Interação e planejamento de forma mais eficiente e eficaz."
            />
            <BlocoBeneficios
            src={Segurança} 
            titulo="Segurança da Informação"
            paragrafo="Níveis de permissão diferentes para cada usuário."
            />
            <BlocoBeneficios
            src={Folha} 
            titulo="Economia e Sustentabilidade"
            paragrafo="Menos papel, menos tinta para impressora e manutenção de equipamentos."
            />
        </div>
    </section>
    )
}