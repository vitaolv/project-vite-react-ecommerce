import PropTypes from 'prop-types';
import { useState } from 'react';
import { NotificationUnselected } from './NotificationUnselected';

export function ButtonDetalheProduto({ corSelecionada}) {
    const [notificationNotSelected, setNotificationNotSelected] = useState(false);
    const handleClick = () => {
      if (corSelecionada === '') {
        setNotificationNotSelected(true);
      } else {
        // Lógica para realizar a ação desejada quando a cor estiver selecionada
        // ...
      }
    };
    return (
        <>
            { corSelecionada === '' && notificationNotSelected && 
                <NotificationUnselected 
                mensagem="Selecione uma cor antes de prosseguir."
                />
            }
            <div className="content-buttons-detali">
                <button
                    className="button-comprar-agora"
                    onClick={handleClick}
                >
                    Comprar agora
                </button>
                <button
                    className="button-adicionar-carrinho"
                    onClick={handleClick}
                >
                    Adicionar ao Carrinho
                </button>
            </div>
        </>
    );
  }
  
  ButtonDetalheProduto.propTypes = {
    corSelecionada: PropTypes.string.isRequired,
  };