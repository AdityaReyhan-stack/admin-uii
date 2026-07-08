import { useNavigate } from "react-router-dom";
import Logo from "../components/Elements/Logo";
import FormSignUp from "../components/Fragments/FormSignUp";
import { registerService } from "../services/authService";

function SignUp() {
  const navigate = useNavigate();

  const handleRegister = async (fullname, email, password) => {
    try {
      const data = await registerService(fullname, email, password);
      console.log(data);
      navigate("/signin"); // arahkan ke halaman login setelah berhasil daftar
    } catch (err) {
      console.error(err.msg);
    }
  };

  return (
    <main className="min-h-screen bg-special-mainBg flex justify-center items-center">
      <div className="w-full max-w-sm">
        <Logo />
        <div className="mt-16">
          <FormSignUp onSubmit={handleRegister} />
        </div>
      </div>
    </main>
  );
}

export default SignUp;
