import React, { useCallback } from 'react';
import { FiDollarSign, FiDownload, FiEdit, FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { useModal } from '../../hooks/modal';
import ModalGenerator from '../ModalGenerator';

import { Container } from './styles';

const SideBar: React.FC = () => {
  const { user } = useAuth();

  const { handleShowModalGenerator } = useModal();

  const handleClickGeneratedPayment = useCallback(() => {
    handleShowModalGenerator();
  }, [handleShowModalGenerator]);

  return (
    <>
      <Container>
        <span>
          <FiMenu />
          Menu
        </span>
        <Link to="/dashboard">
          <FiDollarSign />
          Ver boletos
        </Link>

        {user?.contract_url && (
          <a
            href={user?.contract_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiDownload />
            Contrato
          </a>
        )}
        <button type="button" onClick={handleClickGeneratedPayment}>
          <FiEdit />
          Gerar boleto
        </button>
      </Container>

      <ModalGenerator />
    </>
  );
};

export default SideBar;
