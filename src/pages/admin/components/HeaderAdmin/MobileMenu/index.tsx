import React, { useCallback } from 'react';
import { FiDollarSign, FiEdit, FiUsers, FiX } from 'react-icons/fi';

import { Link } from 'react-router-dom';
import { Container } from './styles';

import logoMinaSvg from '../../../../../assets/logo.svg';
import { useModal } from '../../../../../hooks/modal';
import ModalGenerator from '../../../../../components/ModalGenerator';

interface MobileMenuProps {
  onClose(): void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ onClose }) => {
  const { handleShowModalEdit } = useModal();

  const handleClickEdit = useCallback(() => {
    onClose();
    handleShowModalEdit();
  }, [onClose, handleShowModalEdit]);

  return (
    <>
      <Container>
        <header>
          <div />
          <img src={logoMinaSvg} alt="mina" />

          <FiX onClick={onClose} />
        </header>

        <div className="box-links">
          <Link to="/adm/register">
            <FiEdit />
            Cadastrar Associado
          </Link>
          <button onClick={handleClickEdit} type="button">
            <FiDollarSign />
            Editar preços
          </button>
        </div>
      </Container>

      <ModalGenerator />
    </>
  );
};

export default MobileMenu;
