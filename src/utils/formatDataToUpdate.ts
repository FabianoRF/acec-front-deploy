import { UpdateFormData } from './types';

export default function formatDataToUpdate(
  data: UpdateFormData,
): UpdateFormData {
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
