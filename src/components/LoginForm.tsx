import { useState } from "react";
import type { SubmitEvent } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import type { LoginFormProps } from "../model/LoginForm.types";

export const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit?.({ email, password });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <Stack spacing={2}>
        <Typography variant="h5" component="h1" sx={{ fontWeight: 600 }}>
          Sign in
        </Typography>

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

        <Button type="submit" variant="contained" size="large" fullWidth>
          Sign in
        </Button>
      </Stack>
    </Box>
  );
};

export default LoginForm;
