import React from 'react';
import { FiPower } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

import { Container } from './styles';

import logo from '../../assets/logo.svg';

const Header: React.FC = () => {
  const { signOut, user, adm } = useAuth();

  return (
    <Container>
      <article>
        <div>
          <Link to="/">
            <img src={logo} alt="ACEC" />
          </Link>

          <div>
            Bem vindo,
            {user && <span>{user.name}</span>}
            {adm && <span>Administrador</span>}
          </div>
        </div>

        <Link to="/">
          <FiPower onClick={signOut} />
        </Link>
      </article>
    </Container>
  );
};

export default Header;
