import React, { useCallback, useEffect, useRef, useState } from 'react';
import Modal from 'react-modal';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiCheckCircle, FiX } from 'react-icons/fi';
import * as Yup from 'yup';

import Input from '../../../../components/Input';
import Select from '../../../../components/Select';
import { useModal } from '../../../../hooks/modal';

import { Container, AlteredMessage } from './styles';
import api from '../../../../services/api';
import getValidationErrors from '../../../../utils/getValidationErrors';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

interface RegisterFormData {
  travel_name: string;
  travel_price: number;
}

export const optionsTravel = [
  { value: 'franca', label: 'Cássia -> Franca' },
  { value: 'passos', label: 'Cássia -> Passos' },
  { value: 'passos-multa', label: 'Cássia -> Passos(com atraso)' },
  { value: 'franca-multa', label: 'Cássia -> Franca(com atraso)' },
  { value: 'carona-passos', label: 'Carona -> Passos' },
  { value: 'carona-franca', label: 'Carona -> Franca' },
];

const ModalEditPrice: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [isAltered, setIsAltered] = useState(false);

  const { editModalVisible, handleShowModalEdit } = useModal();

  useEffect(() => {
    setIsAltered(false);
  }, [editModalVisible]);

  const handleSubmit = useCallback(
    async (data: RegisterFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          travel_name: Yup.string().required('Linha obrigatória'),
          travel_price: Yup.string().required('Valor obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/travels', data);

        setIsAltered(!isAltered);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
        alert('Não foi possivel atualizar o preço, tente novamente!');
      }
    },
    [isAltered],
  );

  return (
    <Modal
      isOpen={editModalVisible}
      onRequestClose={handleShowModalEdit}
      style={customStyles}
      ariaHideApp={false}
      contentLabel="Example Modal"
    >
      <Container>
        <header>
          <h1>Editar preços</h1>
          <button type="button" onClick={handleShowModalEdit}>
            <FiX />
          </button>
        </header>

        <Form onSubmit={handleSubmit} ref={formRef}>
          <Select
            name="travel_name"
            options={optionsTravel}
            labelTitle="Selecione a linha:"
          />
          <Input
            name="travel_price"
            type="number"
            placeholder="Digite o novo valor"
            labelText="Valor"
            isRegisterInput
          />

          {!isAltered ? (
            <button type="submit">
              <FiCheckCircle />
              Salvar
            </button>
          ) : (
            <AlteredMessage>
              <h2>Preço alterado com sucesso!</h2>
            </AlteredMessage>
          )}
        </Form>
      </Container>
    </Modal>
  );
};

export default ModalEditPrice;
