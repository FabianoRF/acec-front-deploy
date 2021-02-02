import { RegisterFormData } from './types';

export default function formatDataToSignIn(
  data: RegisterFormData,
): RegisterFormData {
  const newPhone = data.phone
    .replace('(', '')
    .replace(')', '')
    .replace('-', '')
    .replace(' ', '-');

  const newCpf = data.cpf.replace('.', '').replace('.', '').replace('-', '');

  return {
    ...data,
    phone: newPhone,
    cpf: newCpf,
  };
}
