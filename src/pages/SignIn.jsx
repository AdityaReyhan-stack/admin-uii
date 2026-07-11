import { useContext, useState } from "react";
import AuthLayout from "../components/Layouts/AuthLayout";
import FormSignIn from "../components/Fragments/FormSignIn";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import AppSnackbar from "../components/Elements/AppSnackbar";
import { loginService } from "../services/authService";

function SignIn() {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  // fungsi menutup snackbar
  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({
      ...prev,
      open: false,
    }));
  };

  const handleLogin = async (email, password) => {
    try {
      const result = await loginService(email, password);

      console.log("LOGIN RESULT =", result);

      login(result.token || result.accessToken || result.refreshToken);

      setSnackbar({
        open: true,
        message: "Login berhasil",
        severity: "success",
      });

      navigate("/");
    } catch (err) {
      console.log("LOGIN ERROR =", err);

      setSnackbar({
        open: true,
        message: err.msg || "Login gagal",
        severity: "error",
      });
    }
  };

  return (
    <AuthLayout>
      <FormSignIn onSubmit={handleLogin} />

      <AppSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={handleCloseSnackbar}
      />
    </AuthLayout>
  );
}

export default SignIn;
