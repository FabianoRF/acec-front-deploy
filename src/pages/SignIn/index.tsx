import React, { useCallback, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import Loading from '../../components/Loading';
import Input from '../../components/Input';

import getValidationErrors from '../../utils/getValidationErrors';
import { useAuth } from '../../hooks/auth';
import { Container, Content, Button } from './styles';

import logo from '../../assets/logo.svg';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        setIsLoading(true);

        const isAdm = await signIn({
          email: data.email,
          password: data.password,
        });

        history.push(isAdm ? '/adm/dashboard' : '/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
        alert('Não foi possivel entrar, verifique suas credenciais!');
        setIsLoading(false);
      }
    },
    [signIn, history],
  );

  return (
    <Container>
      <Content>
        <img src={logo} alt="" />

        {isLoading ? (
          <article>
            <Loading />
            <span className="loading-message">
              Aguarde, você será redirecionado....
            </span>
          </article>
        ) : (
          <>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <h2>Faça seu login</h2>

              <Input icon={FiMail} name="email" placeholder="E-mail" />
              <Input
                icon={FiLock}
                name="password"
                type="password"
                placeholder="Senha"
              />

              <Button type="submit">
                <FiLogIn />
                Entrar
              </Button>
            </Form>
            <Link to="/register">Não possui cadastro? Cadastre-se aqui.</Link>
          </>
        )}
      </Content>
    </Container>
  );
};

export default SignIn;
