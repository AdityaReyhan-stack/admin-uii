import { useContext, useState } from "react";
import AuthLayout from "../components/Layouts/AuthLayout";
import FormSignIn from "../components/Fragments/FormSignIn";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import AppSnackbar from "../components/Elements/AppSnackbar";

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
    console.log(email, password);

    if (email === "hello@example.com" && password === "12345") {
      console.log("LOGIN BERHASIL");

      login("dummy-token");
      navigate("/");
      return;
    }

    // ganti alert dengan snackbar
    setSnackbar({
      open: true,
      message: "Email atau Password salah",
      severity: "error",
    });
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
