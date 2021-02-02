import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { FiCheck, FiMoreHorizontal } from 'react-icons/fi';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SideBar from '../../components/SideBarAffiliated';

import { useAuth } from '../../hooks/auth';
import { Container, Content, Table } from './styles';
import api from '../../services/api';
import { useModal } from '../../hooks/modal';
import Loading from '../../components/Loading';

interface PaymentData {
  pay_situation: boolean;
  updated_at: Date;
  amount: number;
  payment_url: string;
}

const DashboardAffiliated: React.FC = () => {
  const { user } = useAuth();
  const { generatorModalVisible } = useModal();
  const [isLoading, setIsLoading] = useState(true);

  const [payments, setPayments] = useState<PaymentData[]>([]);

  useEffect(() => {
    async function loadData() {
      if (user) {
        const response = await api.get(`/payments/${user.id}`);
        setPayments(response.data);
      }
      setIsLoading(false);
    }

    setIsLoading(true);
    loadData();
  }, [user, generatorModalVisible]);

  const handleAtualizeSituation = useCallback(async () => {
    setIsLoading(true);
    if (user) {
      const response = await api.get(`/payments/verify-payments/${user?.id}`);
      setPayments(response.data);
    }
    setIsLoading(false);
  }, [user]);

  const formattedMonths = useMemo(() => {
    return payments.map(({ updated_at }) => {
      const dateInstance = new Date(updated_at);

      return format(dateInstance, "MMMM '-' yyyy", {
        locale: ptBR,
      });
    });
  }, [payments]);

  return (
    <>
      <Header handleAtualizeSituation={handleAtualizeSituation} />

      <Container>
        <SideBar handleAtualizeSituation={handleAtualizeSituation} />

        <Content>
          {isLoading ? (
            <Loading />
          ) : (
            <Table>
              <header>
                <span>Seus Boletos</span>
                <span className="value-title">Valor</span>
                <span>Situação</span>
                <span>Ver Boleto</span>
              </header>

              <main>
                {payments.map((payment, index) => (
                  <section key={payment.payment_url}>
                    <span>{formattedMonths[index]}</span>
                    <span className="value-field">
                      R$
                      {payment.amount}
                    </span>

                    {payment.pay_situation ? (
                      <>
                        <button type="button">
                          <FiCheck />
                          Pago
                        </button>
                        <span>Não disponível</span>
                      </>
                    ) : (
                      <>
                        <button type="button" className="btn-unavailable">
                          <FiMoreHorizontal />
                          Aberto
                        </button>

                        <a
                          href={payment.payment_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-show"
                        >
                          Visualizar
                        </a>
                      </>
                    )}
                  </section>
                ))}
              </main>
            </Table>
          )}
        </Content>
      </Container>

      <Footer />
    </>
  );
};

export default DashboardAffiliated;
