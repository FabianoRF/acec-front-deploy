import React, { createContext, useCallback, useContext, useState } from 'react';

interface ModalContextData {
  editModalVisible: boolean;
  paymentModalVisible: boolean;
  generatorModalVisible: boolean;
  affiliatedId: string;
  handleShowModalEdit(): void;
  handleShowModalGenerator(): void;
  handleShowModalPayment(id?: string): void;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

const ModalProvider: React.FC = ({ children }) => {
  const [editModalVisible, setModalvisible] = useState(false);
  const [generatorModalVisible, setGeneratorModalVisible] = useState(false);
  const [paymentModalVisible, setPaymentModalVisible] = useState(false);
  const [affiliatedId, setAfilliatedId] = useState('');

  const handleShowModalEdit = useCallback(() => {
    setModalvisible(!editModalVisible);
  }, [editModalVisible]);

  const handleShowModalGenerator = useCallback(() => {
    setGeneratorModalVisible(!generatorModalVisible);
  }, [generatorModalVisible]);

  const handleShowModalPayment = useCallback(
    (id?: string) => {
      setPaymentModalVisible(!paymentModalVisible);
      if (id) {
        setAfilliatedId(id);
      }
    },
    [paymentModalVisible],
  );

  return (
    <ModalContext.Provider
      value={{
        generatorModalVisible,
        editModalVisible,
        affiliatedId,
        paymentModalVisible,
        handleShowModalGenerator,
        handleShowModalEdit,
        handleShowModalPayment,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

function useModal(): ModalContextData {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { ModalProvider, useModal };
