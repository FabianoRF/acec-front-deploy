import React, { useState } from 'react';
import { FiMenu, FiPower } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';

import { Container } from './styles';

import logo from '../../assets/logo.svg';
import useWindowSize from '../../hooks/windowSize';
import MobileMenu from './MobileMenu';

interface HeaderProps {
  handleAtualizeSituation(): void;
}

const Header: React.FC<HeaderProps> = ({ handleAtualizeSituation }) => {
  const { signOut, user, adm } = useAuth();

  const windowSize = useWindowSize();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <Container>
        <article>
          {windowSize.width < 1000 && (
            <FiMenu onClick={() => setShowMenu(true)} />
          )}
          <div>
            <Link to="/">
              <img src={logo} alt="ACEC" />
            </Link>

            {windowSize.width > 1000 && (
              <div>
                Bem vindo,
                {user && <span>{user.name}</span>}
                {adm && <span>Administrador</span>}
              </div>
            )}
          </div>

          <Link to="/">
            <FiPower onClick={signOut} />
          </Link>
        </article>
      </Container>
      {showMenu && (
        <MobileMenu
          handleAtualizeSituation={handleAtualizeSituation}
          onClose={() => setShowMenu(false)}
        />
      )}
    </>
  );
};

export default Header;
