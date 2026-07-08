import LabeledInput from "../Elements/LabeledInput";
import CheckBox from "../Elements/CheckBox";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";
import { useState } from "react";

function FormSignIn({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <LabeledInput
          label="Email address"
          id="email"
          type="email"
          name="email"
          placeholder="hello@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <LabeledInput
          label="Password"
          id="password"
          type="password"
          name="password"
          placeholder="************"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <CheckBox id="status" name="status" label="Keep me signed in" />

        <Button>Login</Button>
      </form>

      <div className="my-9 px-7 flex flex-col justify-center items-center text-xs text-gray-03">
        <div className="border border-gray-05 w-full"></div>
        <div className="px-2 bg-special-mainBg absolute">or sign in with</div>
      </div>

      <Button type="button" variant="secondary">
        <div className="flex items-center justify-center gap-2">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
            className="w-5 h-5"
          />
          <span>Continue with Google</span>
        </div>
      </Button>

      <div className="flex justify-center mt-8">
        <Link to="/register" className="text-primary text-sm font-bold">
          Create an account
        </Link>
      </div>
    </>
  );
}

export default FormSignIn;
