import React from 'react';
import { FiDollarSign, FiEdit, FiMenu, FiUsers } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useModal } from '../../../../hooks/modal';
import ModalEditPrice from '../ModalEditPrice';

import { Container } from './styles';

const SideBar: React.FC = () => {
  const { handleShowModalEdit } = useModal();
  return (
    <>
      <Container>
        <span>
          <FiMenu />
          Menu
        </span>
        <Link to="/adm/dashboard">
          <FiUsers />
          Ver associados
        </Link>
        <Link to="/adm/register">
          <FiEdit />
          Cadastrar Associado
        </Link>
        <button onClick={handleShowModalEdit} type="button">
          <FiDollarSign />
          Editar preços
        </button>
      </Container>
      <ModalEditPrice />
    </>
  );
};

export default SideBar;
