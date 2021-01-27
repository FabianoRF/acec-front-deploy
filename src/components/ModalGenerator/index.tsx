import React, { useCallback, useEffect, useState } from 'react';
import Modal from 'react-modal';

import { FiX } from 'react-icons/fi';
import { useModal } from '../../hooks/modal';

import { Container } from './styles';
import api from '../../services/api';
import Loading from '../Loading';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const ModalEditPrice: React.FC = () => {
  const [status, setStatus] = useState('INITIAL');
  const [newPaymentLink, setNewPaymentLink] = useState('');
  const { generatorModalVisible, handleShowModalGenerator } = useModal();

  useEffect(() => {
    setStatus('INITIAL');
  }, [handleShowModalGenerator]);

  const handleGeneratePayment = useCallback(async () => {
    try {
      setStatus('LOADING');
      const response = await api.post('/payments');

      setNewPaymentLink(response.data.boletos[0].paymentLink);
      setStatus('ACCEPTED');
    } catch (err) {
      setStatus('ERROR');
    }
  }, []);

  return (
    <Modal
      isOpen={generatorModalVisible}
      onRequestClose={handleShowModalGenerator}
      style={customStyles}
      ariaHideApp={false}
      contentLabel="Example Modal"
    >
      <Container>
        <header>
          <h1>Gere um boleto para este mês</h1>
          <button type="button" onClick={handleShowModalGenerator}>
            <FiX />
          </button>
        </header>

        {status === 'LOADING' && <Loading />}
        {status === 'ERROR' && (
          <>
            <span className="error">
              Erro durante a geração de boleto, verifique se já foi gerado um
              boleto para esse mês, caso não tente novamente...
            </span>
            <button type="button" onClick={handleGeneratePayment}>
              Gerar
            </button>
          </>
        )}

        {status === 'INITIAL' && (
          <button type="button" onClick={handleGeneratePayment}>
            Gerar
          </button>
        )}

        {status === 'ACCEPTED' && (
          <>
            <span className="accepted">
              Seu boleto foi gerado com sucesso, clique para visualizar...
            </span>
            <a
              href={newPaymentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-show"
            >
              Visualizar
            </a>
          </>
        )}
      </Container>
    </Modal>
  );
};

export default ModalEditPrice;
