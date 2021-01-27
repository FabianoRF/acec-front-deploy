import React from 'react';
import { FiFacebook, FiInstagram } from 'react-icons/fi';

import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <div>
        <div className="texting">
          <p>ACEC - CNPJ 43.111.111/1902-00</p>
          <p>
            Endereço: Rua do Centro, 1050 - Centro - Cássia/MG - CEP 37980-000
          </p>
          <p>Telefone: 3541-0000</p>
        </div>

        <section className="socials-container">
          <FiFacebook />
          <FiInstagram />
        </section>
      </div>
    </Container>
  );
};

export default Footer;
