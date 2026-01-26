import { baseService, API_ROUTES } from "./base.service";

export interface LoginReqDto {
  username: string;
  password: string;
}

export interface LoginResDto {
  username: string;
  password: string;
}

export interface SignupReqDto {
  username: string,
  fullname: string,
  lastname: string,
  email: string,
  phone_number: string,
  password: string
}

export interface SignupResDto {
  username: string
}

export interface ResetPasswordReqDto {
  email: string,
}

export interface ResetPasswordResDto {
  email: string,
}



async function login(payload: LoginReqDto) {
  return await baseService.post<LoginResDto>(API_ROUTES.LOGIN, payload);
}

async function signup(payload: SignupReqDto) {
  return await baseService.post<SignupResDto>(API_ROUTES.SIGNUP, payload);
}

async function resetPassword(payload: ResetPasswordReqDto) {
  return await baseService.post<ResetPasswordResDto>(API_ROUTES.RESET_PASSWORD, payload);
}

export const AuthService = {
  login,
  signup,
  resetPassword,
};
