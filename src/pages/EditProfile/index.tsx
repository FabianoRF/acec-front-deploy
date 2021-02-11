import React, { useCallback, useEffect, useRef, useState } from 'react';

import { FiUpload } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { useHistory } from 'react-router-dom';
import Footer from '../../components/Footer';
import SideBar from '../../components/SideBarAffiliated';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Header from '../../components/Header';
import InputMask from '../../components/InputMask';
import Loading from '../../components/Loading';

import { Container, Content } from './styles';
import {
  optionsCourseSchedule,
  optionsTravel,
  ProfileFormData,
} from '../../utils/types';
import getValidationErrors from '../../utils/getValidationErrors';

import api from '../../services/api';

import formatDataToProfile from '../../utils/formatDataToProfile';
import { useAuth } from '../../hooks/auth';
import DropzoneAvatar from '../../components/DropzoneAvatar';

const EditProfile: React.FC = () => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedFile, setSelectedFile] = useState<File>();
  const [userData, setUserData] = useState({} as ProfileFormData);

  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  useEffect(() => {
    api.get(`/users/${user?.id}`).then(response => {
      setUserData(response.data);
      setIsLoading(false);
    });
  }, [user?.id]);

  const handleSubmit = useCallback(
    async (data: ProfileFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          phone: Yup.string().required('Telefone obrigatório'),
          university: Yup.string().required('Obrigatório'),
          course_schedule: Yup.string().required('Obrigatório'),
          period_final: Yup.string().required('Ano obrigatório'),
          period_initial: Yup.string().required('Ano obrigatório'),
          travel: Yup.string().required('Ano obrigatório'),

          course: Yup.string().required('Curso obrigatório'),
          street: Yup.string().required('Rua obrigatório'),
          district: Yup.string().required('Bairro obrigatório'),
          cep: Yup.string().required('CEP obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        setIsLoading(true);

        const formattedData = formatDataToProfile(data);
        if (user) {
          await api.put(`/users/${user.id}`, formattedData);

          if (selectedFile) {
            const formData = new FormData();

            formData.append('avatar', selectedFile, selectedFile.name);

            await api.patch(`/users/avatar/${user.id}`, formData);
          } else if (!selectedFile && !userData.avatar_url) {
            throw new Error('Nenhum arquivo selecionado');
          }
        }

        alert('Informações alteradas com sucesso');

        history.push('/dashboard');
      } catch (err) {
        setIsLoading(false);
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }

        alert(
          'Não foi possivel alterar suas informações, verifique os campos preenchidos ou tente novamente!',
        );
      }
    },
    [history, user, selectedFile, userData.avatar_url],
  );

  return (
    <>
      <Header handleAtualizeSituation={() => {}} />

      <Container>
        <div>
          <SideBar handleAtualizeSituation={() => {}} />

          {isLoading ? (
            <Loading />
          ) : (
            <Content>
              <Form
                onSubmit={handleSubmit}
                ref={formRef}
                initialData={userData}
              >
                <h1>Edite seus dados</h1>
                <article>
                  {userData.avatar_url ? (
                    <img
                      className="profile-img"
                      src={userData.avatar_url}
                      alt="avatar"
                    />
                  ) : (
                    <DropzoneAvatar onFileUploaded={setSelectedFile} />
                  )}
                </article>

                <div className="group3x1">
                  <Input
                    name="email"
                    type="email"
                    placeholder="Digite o email"
                    labelText="Email"
                    isRegisterInput
                  />
                  <InputMask
                    name="phone"
                    placeholder="Digite seu numero"
                    labelText="Telefone"
                    mask="(99) 99999-9999"
                    isRegisterInput
                  />
                </div>

                <Input
                  name="university"
                  type="text"
                  placeholder="Digite o nome de sua faculdade"
                  labelText="Faculdade"
                  isRegisterInput
                />

                <Select
                  name="course_schedule"
                  labelTitle="Periodo"
                  options={optionsCourseSchedule}
                />

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
                    labelText="Cursando de"
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
                <InputMask
                  name="cep"
                  type="text"
                  placeholder="Digite o cep"
                  labelText="CEP"
                  mask="99999-999"
                  isRegisterInput
                />

                <button type="submit">
                  <FiUpload />
                  Salvar
                </button>
              </Form>
            </Content>
          )}
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default EditProfile;
