import React from 'react';

import { AuthProvider } from './auth';
import { ModalProvider } from './modal';

const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <ModalProvider>{children}</ModalProvider>
    </AuthProvider>
  );
};

export default AppProvider;
