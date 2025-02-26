import style from './Formulario.module.css'
import { ConversaDiretaWhatsapp } from "./ConversaDiretaWhatsapp"
import { useState } from 'react'

export function Formulario(){
    const[name, setName]= useState("");
    const[email, setEmail]= useState("");
    const[assunto, setAssunto]= useState("");
    const[mensagemDigitada, setMensagemDigitada]= useState("");


        const validarCampos = () => {
            if (!name.trim()) {
                alert('Por favor, preencha o campo Nome.');
                return false;
            }
            if (!email.trim()) {
                alert('Por favor, preencha o campo Email.');
                return false;
            }
            if (!assunto.trim()) {
                alert('Por favor, preencha o campo Assunto.');
                return false;
            }
            if (!mensagemDigitada.trim()) {
                alert('Por favor, preencha o campo Mensagem.');
                return false;
            }
            return true;
        };
    
        // Função para gerar a mensagem completa
        const gerarMensagem = () => {
            return `Olá Maralab, sou ${name}, email: ${email}, assunto: ${assunto}. ${mensagemDigitada}`;
        };
    
        const manualWhatsAppClick = (e: React.MouseEvent) => {
            e.preventDefault(); // Evita o comportamento padrão do link
            if (validarCampos()) {
                // Se todos os campos estiverem preenchidos, redireciona para o WhatsApp
                window.open(
                    `https://wa.me/5598981227391?text=${encodeURIComponent(gerarMensagem())}`,
                    '_blank'
                );
            }
        };

           // Função para lidar com o pressionar de teclas
    const manualKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Evita o comportamento padrão do formulário
            if (validarCampos()) {
                // Se todos os campos estiverem preenchidos, redireciona para o WhatsApp
                window.open(
                    `https://wa.me/5598981227391?text=${encodeURIComponent(gerarMensagem())}`,
                    '_blank'
                );
            }
        }
    };
    
        return(
            <form className={style.formularioCont} onKeyDown={manualKeyDown} >
                <input
                    className={style.nome}
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={(n) => setName(n.target.value)}
                />

                <input
                    className={style.email}
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    className={style.assunto}
                    type="text"
                    placeholder="Assunto"
                    value={assunto}
                    onChange={(a) => setAssunto(a.target.value)}
                />

                <textarea
                    className={style.digitarMensagem}
                    placeholder="Digite sua mensagem..."
                    value={mensagemDigitada}
                    onChange={(m) => setMensagemDigitada(m.target.value)}
                >
                </textarea>
                <div onClick={manualWhatsAppClick}>
                        <ConversaDiretaWhatsapp
                            phoneNumber="5598991086869" // Substitua pelo número da sua empresa
                            message={gerarMensagem()} // Passa a mensagem gerada dinamicamente
                            buttonText="ENVIAR MENSAGEM"
                        />
                </div>
            </form>
            
        )
}