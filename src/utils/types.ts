export interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  cpf: string;
  rg: string;
  age: number;
  works: boolean;
  course: string;
  course_period: number;
  travel: string;
  street: string;
  number: number;
  district: string;
  phone: string;
  cep: string;
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
