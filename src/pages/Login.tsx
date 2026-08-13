import { Box, Container, Paper } from "@mui/material";
import LoginForm from "../components/LoginForm";
import type { LoginFormValues } from "../model/LoginForm.types";

export const Login = () => {
  const handleLogin = (values: LoginFormValues) => {
    console.log("Login submitted", values);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth="xs">
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
          <LoginForm onSubmit={handleLogin} />
        </Paper>
      </Container>
    </Box>
  );
};

export default Login;
