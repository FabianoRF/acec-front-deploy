import React, { useCallback, useRef, useState } from 'react';
import { FiUpload } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { Link, useHistory } from 'react-router-dom';
import DropzoneAvatar from '../../components/DropzoneAvatar';
import getValidationErrors from '../../utils/getValidationErrors';

import { Button, Container, Content, Header } from './styles';

import Input from '../../components/Input';
import InputMask from '../../components/InputMask';

import logo from '../../assets/logo.svg';
import api from '../../services/api';
import Select from '../../components/Select';
import Loading from '../../components/Loading';
import { RegisterFormData } from '../../utils/types';
import formatDataToSignIn from '../../utils/formatDataToSignIn';

export const optionsTravel = [
  { value: 'franca', label: 'Cássia-Franca' },
  { value: 'passos', label: 'Cássia-Passos' },
];

export const optionsWorks = [
  { value: true, label: 'sim' },
  { value: false, label: 'não' },
];

const SignUp: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const [selectedFile, setSelectedFile] = useState<File>();

  const handleSubmit = useCallback(
    async (data: RegisterFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
          password_confirmation: Yup.string().oneOf(
            [Yup.ref('password'), undefined],
            'Confirmação incorreta',
          ),
          period_final: Yup.number().required('Obrigatório'),
          period_initial: Yup.number().required('Obrigatório'),
          cpf: Yup.string().required('CPF obrigatório'),
          rg: Yup.string().required('RG obrigatório'),
          phone: Yup.string().required('Telefone obrigatório'),
          age: Yup.number().required('Idade obrigatória'),

          works: Yup.string().required('Trabalho obrigatório'),
          course: Yup.string().required('Curso obrigatório'),
          travel: Yup.string().required('Linha obrigatória'),
          street: Yup.string().required('Rua obrigatório'),
          district: Yup.string().required('Bairro obrigatório'),
          cep: Yup.string().required('CEP obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        setIsLoading(true);

        const formattedData = formatDataToSignIn(data);

        const response = await api.post('/users', formattedData);

        if (selectedFile) {
          const formData = new FormData();

          formData.append('avatar', selectedFile, selectedFile.name);

          await api.patch(`/users/avatar/${response.data.id}`, formData);
        }

        history.push('/');
        setIsLoading(false);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
        setIsLoading(false);

        alert(
          'Não foi possivel fazer o cadastro, verifique os campos preenchidos ou tente novamente!',
        );
      }
    },
    [selectedFile, history],
  );

  return (
    <Container>
      <Content>
        <img src={logo} alt="acec" />

        {isLoading ? (
          <article>
            <Loading />
            <span className="loading-message">
              Aguarde, o cadastro está sendo realizado....
            </span>
          </article>
        ) : (
          <Form onSubmit={handleSubmit} ref={formRef}>
            <h2>Cadastro</h2>

            <Header>
              <h3>Dados Pessoais</h3>
              <Link to="/">Voltar para o login</Link>
            </Header>

            <main>
              <section className="profile-section">
                <DropzoneAvatar onFileUploaded={setSelectedFile} />

                <div className="input-group">
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
                  <Input
                    name="password"
                    type="password"
                    placeholder="Digite a senha"
                    labelText="Senha"
                    isRegisterInput
                  />
                  <Input
                    name="password_confirmation"
                    type="password"
                    placeholder="Digite a senha"
                    labelText="Confirme a senha"
                    isRegisterInput
                  />
                </div>
              </section>

              <section className="documents-section">
                <InputMask
                  name="cpf"
                  placeholder="Digite o cpf"
                  labelText="CPF"
                  mask="999.999.999-99"
                  isRegisterInput
                />
                <Input
                  name="rg"
                  type="text"
                  placeholder="Digite o rg"
                  labelText="RG"
                  isRegisterInput
                />
                <InputMask
                  name="phone"
                  placeholder="Digite seu numero"
                  labelText="Telefone"
                  mask="(99) 99999-9999"
                  isRegisterInput
                />
                <div className="groupx2">
                  <Input
                    name="age"
                    type="number"
                    placeholder="Digite a idade"
                    labelText="Idade"
                    isRegisterInput
                  />
                  <Select
                    name="works"
                    options={optionsWorks}
                    labelTitle="Trabalha:"
                  />
                </div>

                <Input
                  name="course"
                  type="text"
                  placeholder="Digite o curso"
                  labelText="Curso"
                  isRegisterInput
                />
                <div className="groupx2">
                  <Input
                    name="period_initial"
                    type="number"
                    placeholder="Ano de início"
                    labelText="Periodo de"
                    isRegisterInput
                  />
                  <Input
                    name="period_final"
                    type="number"
                    placeholder="Ano de termino"
                    labelText="até"
                    isRegisterInput
                  />
                </div>

                <Select
                  name="travel"
                  options={optionsTravel}
                  labelTitle="Linha:"
                />
              </section>

              <h3>Endereço:</h3>
              <section className="adress-section">
                <Input
                  name="street"
                  type="text"
                  placeholder="Digite a rua"
                  labelText="Rua"
                  isRegisterInput
                />
                <Input
                  name="district"
                  type="text"
                  placeholder="Digite o bairro"
                  labelText="Bairro"
                  isRegisterInput
                />
                <InputMask
                  name="cep"
                  type="text"
                  placeholder="Digite o cep"
                  labelText="CEP"
                  mask="99999-999"
                  isRegisterInput
                />
              </section>
            </main>
            <Button type="submit">
              <FiUpload />
              Cadastrar
            </Button>
          </Form>
        )}
      </Content>
    </Container>
  );
};

export default SignUp;
