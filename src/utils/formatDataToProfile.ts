import { ProfileFormData } from './types';

export default function formatDataToProfile(
  data: ProfileFormData,
): ProfileFormData {
  const newPhone = data.phone
    .replace('(', '')
    .replace(')', '')
    .replace('-', '')
    .replace(' ', '-');

  return {
    ...data,
    phone: newPhone,
  };
}
