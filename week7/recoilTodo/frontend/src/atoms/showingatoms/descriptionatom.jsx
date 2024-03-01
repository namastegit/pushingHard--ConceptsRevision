import { atom } from 'recoil';

export const titleState = atom({
  key: 'titleState',
  default: '',
});

export const descriptionState = atom({
  key: 'descriptionState',
  default: '',
});
