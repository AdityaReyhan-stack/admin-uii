import React from "react";
import LabeledInput from "../Elements/LabeledInput";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";

function FormSignUp() {
  return (
    <>
      <form action="">
        <LabeledInput
          label="Full Name"
          id="fullname"
          type="text"
          name="fullname"
          placeholder="John Doe"
        />

        <LabeledInput
          label="Email address"
          id="email"
          type="email"
          name="email"
          placeholder="hello@example.com"
        />

        <LabeledInput
          label="Password"
          id="password"
          type="password"
          name="password"
          placeholder="************"
        />

        <Button>Register</Button>
      </form>

      <div className="flex justify-center mt-8">
        <p className="text-sm text-gray-01">
          Already have an account?{" "}
          <Link to="/login" className="text-primary font-bold">
            Sign In Here
          </Link>
        </p>
      </div>
    </>
  );
}

export default FormSignUp;
