import style from "./ConversaDiretaWhatsapp.module.css"
import React from 'react';

interface ConversaDiretaWhatsappProps  {
  phoneNumber: string; // Número da empresa no formato internacional (ex.: 5511999999999)
  message?: string; // Mensagem pré-definida (opcional)
  buttonText?: string; // Texto do botão (opcional)
}

export const ConversaDiretaWhatsapp: React.FC<ConversaDiretaWhatsappProps> = ({
  phoneNumber,
  message = 'Olá, gostaria de mais informações!',
  buttonText = 'ENVIAR MENSAGEM',
}) => {
  // Formata o link do WhatsApp
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    
    <a className={style.LInkWhats} href={whatsappLink} target="_blank" rel="noopener noreferrer">
    <button type="button" className={style.WhatsappButton}>
        {buttonText}
    </button>
</a>
  
  );
};