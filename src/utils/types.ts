export interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  cpf: string;
  rg: string;
  age: number;
  works: boolean;
  course: string;
  period_initial: number;
  period_final: number;
  travel: string;
  street: string;
  district: string;
  phone: string;
  cep: string;
}

export interface UpdateFormData {
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

export interface RideFormData {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  travel: string;
}

export const optionsTravel = [
  { value: 'franca', label: 'Cássia -> Franca' },
  { value: 'passos', label: 'Cássia -> Passos' },
  { value: 'passos-multa', label: 'Cássia -> Passos(com atraso)' },
  { value: 'franca-multa', label: 'Cássia -> Franca(com atraso)' },
  { value: 'carona-passos', label: 'Carona -> Passos' },
  { value: 'carona-franca', label: 'Carona -> Franca' },
];

export const optionsWorks = [
  { value: true, label: 'sim' },
  { value: false, label: 'não' },
];
