import style from "./BlocoDoacao.module.css"

export function BlocoDoacao({imagem, texto}){
    return(
        <div className={style.grupoDoa}>
            <img className={style.iconesDoacao} src={imagem} alt="" />
            <p>{texto}</p>
        </div>
    )
}