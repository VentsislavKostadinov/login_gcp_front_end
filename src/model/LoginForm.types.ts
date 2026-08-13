export type LoginFormValues = {
  email: string;
  password: string;
};

export type LoginFormProps = {
  onSubmit: (values: LoginFormValues) => void;
};
