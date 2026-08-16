export type LoginFormValues = {
  email: string;
  password: string;
};

export type LoginFormResponse = {
  uid: string;
  mail: string;
  idToken: string;
  refreshToken: string;
  expiresIn: number;
};
