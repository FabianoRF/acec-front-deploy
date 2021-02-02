import React, { useCallback } from 'react';
import { FiDownload, FiEdit, FiRepeat, FiX } from 'react-icons/fi';

import { Container } from './styles';

import logoMinaSvg from '../../../assets/logo.svg';
import { useAuth } from '../../../hooks/auth';
import { useModal } from '../../../hooks/modal';
import ModalGenerator from '../../ModalGenerator';

interface MobileMenuProps {
  onClose(): void;
  handleAtualizeSituation(): void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  onClose,
  handleAtualizeSituation,
}) => {
  const { user } = useAuth();

  const { handleShowModalGenerator } = useModal();

  const handleClickGeneratedPayment = useCallback(() => {
    handleShowModalGenerator();
    onClose();
  }, [handleShowModalGenerator, onClose]);

  const handleClickAtualizeSituation = useCallback(() => {
    handleAtualizeSituation();
    onClose();
  }, [handleAtualizeSituation, onClose]);

  return (
    <>
      <Container>
        <header>
          <div />
          <img src={logoMinaSvg} alt="mina" />

          <FiX onClick={onClose} />
        </header>

        <div className="box-links">
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
          <button
            type="button"
            className="btn-att"
            onClick={handleClickAtualizeSituation}
          >
            <FiRepeat />
            Atualizar Situação
          </button>
        </div>
      </Container>

      <ModalGenerator />
    </>
  );
};

export default MobileMenu;
