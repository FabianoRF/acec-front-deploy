import React from 'react';
import { Link } from 'react-router-dom';

import { Container, MainSection, CardSection } from './styles';

import logo from '../../assets/logo.svg';
import busImg from '../../assets/bus-landing.png';
import cardImg1 from '../../assets/card1.png';
import cardImg2 from '../../assets/card2.png';
import busClockIcon from '../../assets/bus-clock-icon.svg';
import graduationIcon from '../../assets/graduation-icon.svg';
import Footer from '../../components/Footer';

const Landing: React.FC = () => {
  return (
    <>
      <Container>
        <header>
          <div>
            <img src={logo} alt="acec" />

            <nav>
              <Link to="/ride" className="btn-carona">
                Carona
              </Link>
              <Link to="/sign-in" className="btn-sign-in">
                Entrar
              </Link>
            </nav>
          </div>
        </header>

        <MainSection>
          <div>
            <article>
              <h1>Seja bem vindo ao Portal ACEC</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries.
              </p>

              <Link to="sign-in">Login de associado</Link>
            </article>

            <img src={busImg} alt="bus" />
          </div>
        </MainSection>

        <CardSection>
          <div>
            <img src={cardImg1} alt="imagem" />

            <div>
              <h2>Lorem ipsum dolor sit amet, consectetur.</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries.
              </p>

              <img src={busClockIcon} alt="clock" />
            </div>
          </div>
        </CardSection>

        <CardSection>
          <div className="flex-reverse">
            <img src={cardImg2} alt="imagem" />

            <div>
              <h2>Lorem ipsum dolor sit amet, consectetur.</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries.
              </p>

              <img src={graduationIcon} alt="clock" />
            </div>
          </div>
        </CardSection>
      </Container>

      <Footer />
    </>
  );
};

export default Landing;
