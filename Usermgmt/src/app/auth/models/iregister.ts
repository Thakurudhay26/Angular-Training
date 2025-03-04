import { Ilogin } from './ilogin';
export interface IRegister extends Ilogin {
  email: string;
  password: string;
}
