import { useState } from "react";
import type { SubmitEvent } from "react";
import {
  Alert,
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useUserLogin } from "../hooks/useUserLogin";

const FormTitle = styled(Typography)({
  fontWeight: 600,
}) as typeof Typography;

export const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { data, loading, error, login } = useUserLogin();

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitting form with values:", { email, password });
    login({ email, password });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <Stack spacing={2}>
        <FormTitle variant="h5" component="h1">
          Sign in
        </FormTitle>

        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          autoComplete="email"
          required
          fullWidth
        />

        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          autoComplete="current-password"
          required
          fullWidth
        />

        {error && <Alert severity="error">{error.message}</Alert>}

        <Button
          type="submit"
          variant="contained"
          size="large"
          fullWidth
          loading={loading}
          disabled={loading}
        >
          Sign in
        </Button>

        {data && (
          <Stack spacing={0.5}>
            <Typography variant="body2">UID: {data.uid}</Typography>
            <Typography variant="body2">Email: {data.mail}</Typography>
            <Typography variant="body2">ID token: {data.idToken}</Typography>
            <Typography variant="body2">
              Refresh token: {data.refreshToken}
            </Typography>
            <Typography variant="body2">
              Expires in: {data.expiresIn}s
            </Typography>
          </Stack>
        )}
      </Stack>
    </Box>
  );
};

export default LoginForm;
