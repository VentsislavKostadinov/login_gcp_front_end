import useAxios from "axios-hooks";
import { ApiRoutes } from "../utils/apiRoutes";
import type { LoginFormResponse, LoginFormValues } from "../model/LoginForm.types";

export const useUserLogin = () => {
  const [{ data, loading, error }, execute] = useAxios<LoginFormResponse>(
    {
      url: ApiRoutes.LOGIN,
      method: "POST",
    },
    { manual: true },
  );

  const login = async (values: LoginFormValues) => {
    try {
      const response = await execute({ data: values });
      return response.data;
    } catch (err) {
      console.error("Failed to send username and password", err);
      throw err;
    }
  };

  return { data, loading, error, login };
};
