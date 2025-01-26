import style from "./ObjetivoDeDesenvolvimentoSustentavel.module.css"

export function ObjetivoDeDesenvolvimentoSustentavel({ imagem }){
    return(
        <div className={style.imagensODS}>
            <img className={style.imagemODS} src={imagem} alt="" />
        </div>
    )
}