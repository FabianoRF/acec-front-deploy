import React, { useCallback, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { Link } from 'react-router-dom';
import getValidationErrors from '../../utils/getValidationErrors';

import { Button, Container, Content, Header } from './styles';

import Input from '../../components/Input';
import InputMask from '../../components/InputMask';

import logo from '../../assets/logo.svg';
import api from '../../services/api';
import Select from '../../components/Select';
import Loading from '../../components/Loading';
import { RideFormData } from '../../utils/types';
import formatDataToRide from '../../utils/formatDataToRide';

export const optionsTravel = [
  { value: 'franca', label: 'Cássia-Franca' },
  { value: 'passos', label: 'Cássia-Passos' },
];

const CreateRide: React.FC = () => {
  const [status, setStatus] = useState('INITIAL');
  const [newPaymentLink, setNewPaymentLink] = useState('');

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: RideFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        cpf: Yup.string().required('CPF obrigatório'),
        phone: Yup.string().required('Telefone obrigatório'),

        travel: Yup.string().required('Linha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      setStatus('LOADING');

      const formattedData = formatDataToRide(data);

      const response = await api.post('/payments/ride', formattedData);

      setNewPaymentLink(response.data.boletos[0].paymentLink);

      setStatus('ACCEPTED');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }

      setStatus('ERROR');
    }
  }, []);

  return (
    <Container>
      <Content>
        <img src={logo} alt="acec" />

        <Form onSubmit={handleSubmit} ref={formRef}>
          <h2>Carona</h2>

          <Header>
            <h3>Digite seus dados pessoais</h3>
            <Link to="/">Voltar</Link>
          </Header>

          <main>
            <section className="profile-section">
              <Input
                name="name"
                type="text"
                placeholder="Digite o nome"
                labelText="Nome"
                isRegisterInput
              />
              <Input
                name="email"
                type="email"
                placeholder="Digite o email"
                labelText="Email"
                isRegisterInput
              />
              <InputMask
                name="cpf"
                placeholder="Digite o cpf"
                labelText="CPF"
                mask="999.999.999-99"
                isRegisterInput
              />
              <InputMask
                name="phone"
                placeholder="Digite seu numero"
                labelText="Telefone"
                mask="(99) 99999-9999"
                isRegisterInput
              />
              <Select
                name="travel"
                options={optionsTravel}
                labelTitle="Percurso:"
              />
            </section>
          </main>

          {status === 'LOADING' && <Loading />}
          {status === 'ERROR' && (
            <>
              <span className="error">
                Erro durante a geração de boleto, verifique suas credenciais e
                tente novamente...
              </span>
              <Button type="submit">Gerar boleto</Button>
            </>
          )}

          {status === 'INITIAL' && <Button type="submit">Gerar boleto</Button>}

          {status === 'ACCEPTED' && (
            <div className="accepted">
              <span>
                Seu boleto foi gerado com sucesso, clique para visualizar...
              </span>
              <a
                href={newPaymentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-show"
              >
                Visualizar
              </a>
            </div>
          )}
        </Form>
      </Content>
    </Container>
  );
};

export default CreateRide;
