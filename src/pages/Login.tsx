import { Container, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import LoginForm from "../components/LoginForm";

const PageWrapper = styled("div")(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.background.default,
}));

const LoginCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: 16,
}));

export const Login = () => {
  return (
    <PageWrapper>
      <Container maxWidth="xs">
        <LoginCard elevation={3}>
          <LoginForm />
        </LoginCard>
      </Container>
    </PageWrapper>
  );
};

export default Login;
