import { useState } from "react";
import LabeledInput from "../Elements/LabeledInput";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";

function FormSignUp({ onSubmit }) {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(fullname, email, password);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <LabeledInput
          label="Full Name"
          id="fullname"
          type="text"
          name="fullname"
          placeholder="John Doe"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />

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

        <Button>Register</Button>
      </form>

      <div className="flex justify-center mt-8">
        <p className="text-sm text-gray-01">
          Already have an account?{" "}
          <Link to="/signin" className="text-primary font-bold">
            Sign In Here
          </Link>
        </p>
      </div>
    </>
  );
}

export default FormSignUp;
