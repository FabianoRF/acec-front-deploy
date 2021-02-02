import React, { useCallback, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { FiSearch, FiEdit, FiClipboard } from 'react-icons/fi';

import HeaderAdmin from '../components/HeaderAdmin';
import Footer from '../../../components/Footer';
import SideBar from '../components/SideBar';

import { Container, Content, Table, UserInformation } from './styles';
import api from '../../../services/api';
import ModalPayments from '../components/ModalPayments';
import { useModal } from '../../../hooks/modal';

import avatarDefault from '../../../assets/avatar-default.png';
import Loading from '../../../components/Loading';

interface User {
  id: string;
  name: string;
  travel: string;
  avatar_url: string;
  contract_url: string;
}

const Dashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [showUsers, setShowUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const [isLoading, setIsLoading] = useState(true);

  const { handleShowModalPayment } = useModal();

  useEffect(() => {
    api.get('/users').then(response => {
      setUsers(response.data);
      setShowUsers(response.data);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const results = users.filter(product =>
        product.name.toLowerCase().includes(searchTerm),
      );
      setShowUsers(results);
    } else {
      setShowUsers(users);
    }
  }, [searchTerm, users]);

  const handleChangeSearchTerm = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      setSearchTerm(event.currentTarget.value);
    },
    [],
  );

  return (
    <>
      <HeaderAdmin />

      <Container>
        <div>
          <SideBar />

          {isLoading ? (
            <Loading />
          ) : (
            <Content>
              <div>
                <div>
                  <FiSearch size="24" color="#fff" />
                  <input
                    type="text"
                    placeholder="Digite aqui um nome..."
                    value={searchTerm}
                    onChange={handleChangeSearchTerm}
                  />
                </div>
              </div>

              <Table>
                <header>
                  <span>Nome</span>
                  <span className="travel-title">Linha</span>
                  <span>Pagamentos</span>
                  <span>Contrato</span>
                </header>
                <main>
                  {showUsers.map(user => (
                    <section key={user.id}>
                      <UserInformation>
                        {user.avatar_url ? (
                          <img src={user.avatar_url} alt="avatar" />
                        ) : (
                          <img src={avatarDefault} alt="avatar" />
                        )}
                        {user.name}
                        <Link to={`/adm/edit-affiliated/${user.id}`}>
                          <FiEdit />
                        </Link>
                      </UserInformation>

                      <span className="travel-field">{user.travel}</span>
                      <button
                        type="button"
                        className="btn-show-payments"
                        onClick={() => handleShowModalPayment(user.id)}
                      >
                        Ver boletos
                      </button>

                      <a
                        href={user.contract_url}
                        className="btn-show-contract"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiClipboard />
                        Ver
                      </a>
                    </section>
                  ))}
                </main>
              </Table>
            </Content>
          )}
        </div>
      </Container>

      <Footer />

      <ModalPayments />
    </>
  );
};

export default Dashboard;
