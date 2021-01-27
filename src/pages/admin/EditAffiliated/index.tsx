import React, { useCallback, useEffect, useRef, useState } from 'react';

import { FiUpload, FiUserX } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { useHistory, useParams } from 'react-router-dom';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import SideBar from '../components/SideBar';
import Input from '../../../components/Input';
import Select from '../../../components/Select';

import { Container, Content } from './styles';
import { optionsTravel } from '../../../utils/types';

import getValidationErrors from '../../../utils/getValidationErrors';
import api from '../../../services/api';
import DropzoneContract from '../../../components/DropzoneContract';
import Loading from '../../../components/Loading';

import avatarDefault from '../../../assets/avatar-default.png';

interface RouteParams {
  id: string;
}

interface RegisterFormData {
  name: string;
  email: string;
  cpf: string;
  rg: string;
  phone: string;
  age: number;
  course: string;
  period_initial: string;
  period_final: string;
  travel: string;
  street: string;
  district: string;
  cep: string;
  contract_url: string;
  avatar_url: string;
}

const CreateAffiliated: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File>();
  const [isLoading, setIsLoading] = useState(true);

  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { id } = useParams<RouteParams>();
  const [userData, setUserData] = useState({} as RegisterFormData);

  useEffect(() => {
    api.get(`/users/${id}`).then(response => {
      setUserData(response.data);
      setIsLoading(false);
    });
  }, [id]);

  const handleSubmit = useCallback(
    async (data: RegisterFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),

          period_final: Yup.string().required('Ano obrigatório'),
          period_initial: Yup.string().required('Ano obrigatório'),
          cpf: Yup.string().required('CPF obrigatório'),
          rg: Yup.string().required('RG obrigatório'),
          phone: Yup.string().required('Telefone obrigatório'),
          age: Yup.number().required('Idade obrigatória'),

          course: Yup.string().required('Curso obrigatório'),
          street: Yup.string().required('Rua obrigatório'),
          district: Yup.string().required('Bairro obrigatório'),
          cep: Yup.string().required('CEP obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        // fazer o cadastro no banco tanto do associado quanto do contrato
        if (selectedFile) {
          const formData = new FormData();

          formData.append('contract', selectedFile);

          await api.patch(`/users/contract/${id}`, formData);
        }

        await api.put(`/users/${id}`, data);

        alert('Afiliado editado com sucesso');

        history.push('/adm/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }

        alert(
          'Não foi possivel alterar este associado, verifique os campos preenchidos ou tente novamente!',
        );
      }
    },
    [history, id, selectedFile],
  );

  const handleClickDelete = useCallback(async () => {
    const response = confirm(
      'Você tem certeza que deseja excluir este associado?',
    );
    if (!response) {
      return;
    }

    await api.delete(`/users/${id}`);

    alert('Associado excluído com sucesso');

    history.push('/adm/dashboard');
  }, [history, id]);

  return (
    <>
      <Header />

      <Container>
        <div>
          <SideBar />

          {isLoading ? (
            <Loading />
          ) : (
            <Content>
              <Form
                onSubmit={handleSubmit}
                ref={formRef}
                initialData={userData}
              >
                <h1>Digite os dados do associado</h1>
                <article>
                  <img
                    src={
                      userData.avatar_url ? userData.avatar_url : avatarDefault
                    }
                    alt="avatar"
                  />
                </article>

                <div className="group3x1">
                  <Input
                    name="name"
                    type="text"
                    placeholder="Digite o nome"
                    labelText="Nome"
                    isRegisterInput
                  />
                  <Input
                    name="age"
                    type="number"
                    placeholder="Digite a idade"
                    labelText="Idade"
                    isRegisterInput
                  />
                </div>

                <div className="group3x1">
                  <Input
                    name="email"
                    type="email"
                    placeholder="Digite o email"
                    labelText="Email"
                    isRegisterInput
                  />
                  <Input
                    name="phone"
                    type="phone"
                    placeholder="Digite o telefone"
                    labelText="Telefone"
                    isRegisterInput
                  />
                </div>

                <div className="group">
                  <Input
                    name="cpf"
                    type="text"
                    placeholder="Digite o cpf"
                    labelText="CPF"
                    isRegisterInput
                  />
                  <Input
                    name="rg"
                    type="text"
                    placeholder="Digite o rg"
                    labelText="RG"
                    isRegisterInput
                  />
                </div>

                <Input
                  name="course"
                  type="text"
                  placeholder="Digite o curso"
                  labelText="Curso"
                  isRegisterInput
                />
                <div className="group">
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

                <h1>Endereço:</h1>
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
                <Input
                  name="cep"
                  type="text"
                  placeholder="Digite o cep"
                  labelText="CEP"
                  isRegisterInput
                />

                <div className="box-contract">
                  <h2>Contrato:</h2>

                  {userData.contract_url ? (
                    <a href={userData.contract_url} className="btn-contract">
                      Ver Contrato
                    </a>
                  ) : (
                    <DropzoneContract onFileUploaded={setSelectedFile} />
                  )}
                </div>

                <div className="box-btn">
                  <button
                    type="button"
                    onClick={handleClickDelete}
                    className="btn-delete"
                  >
                    <FiUserX />
                    Excluir
                  </button>

                  <button type="submit">
                    <FiUpload />
                    Salvar
                  </button>
                </div>
              </Form>
            </Content>
          )}
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default CreateAffiliated;
