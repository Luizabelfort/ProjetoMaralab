import style from "./BlocoBeneficios.module.css"

export function BlocoBeneficios({titulo, paragrafo, src}){
    return(
    <div className={style.bloco}>
        <img className={style.imagemBloco} src={src} alt="" />
        <h3 className={style.blocoH3}>{titulo}</h3>
        <p className={style.blocoP}>{paragrafo}</p>
    </div>
    )
}