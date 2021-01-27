import React, { useEffect, useMemo, useState } from 'react';
import Modal from 'react-modal';
import { FiCheck, FiMoreHorizontal, FiX } from 'react-icons/fi';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { useModal } from '../../../../hooks/modal';

import { Container } from './styles';
import api from '../../../../services/api';

interface PaymentData {
  pay_situation: boolean;
  updated_at: Date;
}

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

const ModalPayments: React.FC = () => {
  const [payments, setPayments] = useState<PaymentData[]>([]);
  const {
    paymentModalVisible,
    handleShowModalPayment,
    affiliatedId,
  } = useModal();

  useEffect(() => {
    api
      .get(`/payments/${affiliatedId}`)
      .then(response => setPayments(response.data));
  }, [affiliatedId]);

  const formattedMonths = useMemo(() => {
    return payments.map(({ updated_at }) => {
      const dateInstance = new Date(updated_at);

      return format(dateInstance, "MMMM 'de' yyyy", {
        locale: ptBR,
      });
    });
  }, [payments]);

  return (
    <Modal
      isOpen={paymentModalVisible}
      onRequestClose={() => handleShowModalPayment()}
      style={customStyles}
      ariaHideApp={false}
      contentLabel="Example Modal"
    >
      <Container>
        <header>
          <h1>Histórico de boletos</h1>
          <button type="button" onClick={() => handleShowModalPayment()}>
            <FiX />
          </button>
        </header>

        <main>
          {payments.map((payment, index) => (
            <div>
              <span>{formattedMonths[index]}</span>

              {payment.pay_situation ? (
                <button type="button" className="btn-checked">
                  <FiCheck />
                  Pago
                </button>
              ) : (
                <button type="button" className="btn-unavailable">
                  <FiMoreHorizontal />
                  Aberto
                </button>
              )}
            </div>
          ))}
        </main>
      </Container>
    </Modal>
  );
};

export default ModalPayments;
