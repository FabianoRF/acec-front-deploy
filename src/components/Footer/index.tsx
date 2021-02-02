import React from 'react';
import { FiCodepen } from 'react-icons/fi';

import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/FabianoRF/"
        >
          <FiCodepen />
          Desenvolvido por
          <span>Fabiano Reis</span>
        </a>
      </div>
    </Container>
  );
};

export default Footer;
