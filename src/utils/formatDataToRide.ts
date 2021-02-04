import { RideFormData } from './types';

export default function formatDataToRide(data: RideFormData): RideFormData {
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
