import style from './Formulario.module.css'

export function Formulario(){
    return(
        <form className={style.formularioCont}>
            <input className={style.nome} type="text" placeholder='Nome'/>

            <input className={style.email} type="email"
            placeholder='Email'/>

            <input className={style.assunto} type="text"
            placeholder='Assunto'/>

            <textarea className={style.digitarMensagem}
            placeholder='Digite sua mensagem...'></textarea>

            <button className={style.enviar} type="submit">ENVIAR MENSAGEM</button>
        </form>
    )
}