import { useNavigate } from "react-router-dom";
import Logo from "../components/Elements/Logo";
import FormSignUp from "../components/Fragments/FormSignUp";
import { registerService } from "../services/authService";
import { useState } from "react";
import AppSnackbar from "../components/Elements/AppSnackbar";

function SignUp() {
  const navigate = useNavigate();

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({
      ...prev,
      open: false,
    }));
  };

  const handleRegister = async (fullname, email, password) => {
    try {
      const data = await registerService(fullname, email, password);

      setSnackbar({
        open: true,
        message: data.msg || "Register berhasil",
        severity: "success",
      });

      setTimeout(() => {
        navigate("/signin");
      }, 1500);
    } catch (err) {
      setSnackbar({
        open: true,
        message: err.msg || "Register gagal",
        severity: "error",
      });
    }
  };

  return (
    <main className="min-h-screen bg-special-mainBg flex justify-center items-center">
      <div className="w-full max-w-sm">
        <Logo />
        <div className="mt-16">
          <FormSignUp onSubmit={handleRegister} />
          <AppSnackbar
            open={snackbar.open}
            message={snackbar.message}
            severity={snackbar.severity}
            onClose={handleCloseSnackbar}
          />
        </div>
      </div>
    </main>
  );
}

export default SignUp;
