import React from "react";
import Logo from "../components/Elements/Logo";
import FormSignUp from "../components/Fragments/FormSignUp";

function SignUp() {
  return (
    <main className="min-h-screen bg-special-mainBg flex justify-center items-center">
      <div className="w-full max-w-sm">
        <Logo />
        <div className="mt-16">
          <FormSignUp />
        </div>
      </div>
    </main>
  );
}

export default SignUp;
