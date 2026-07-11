import LabeledInput from "../Elements/LabeledInput";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignUpSchema = Yup.object().shape({
  fullname: Yup.string().required("Nama lengkap wajib diisi"),
  email: Yup.string().email("Email tidak valid").required("Email wajib diisi"),
  password: Yup.string()
    .min(6, "Password minimal 6 karakter")
    .required("Password wajib diisi"),
});

function FormSignUp({ onSubmit }) {
  return (
    <>
      <Formik
        initialValues={{
          fullname: "",
          email: "",
          password: "",
        }}
        validationSchema={SignUpSchema}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            await onSubmit(values.fullname, values.email, values.password);
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-6">
              <Field name="fullname">
                {({ field }) => (
                  <LabeledInput
                    {...field}
                    label="Full Name"
                    id="fullname"
                    type="text"
                    placeholder="John Doe"
                  />
                )}
              </Field>

              <ErrorMessage
                name="fullname"
                component="p"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            <div className="mb-6">
              <Field name="email">
                {({ field }) => (
                  <LabeledInput
                    {...field}
                    label="Email Address"
                    id="email"
                    type="email"
                    placeholder="hello@example.com"
                  />
                )}
              </Field>

              <ErrorMessage
                name="email"
                component="p"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            <div className="mb-6">
              <Field name="password">
                {({ field }) => (
                  <LabeledInput
                    {...field}
                    label="Password"
                    id="password"
                    type="password"
                    placeholder="************"
                  />
                )}
              </Field>

              <ErrorMessage
                name="password"
                component="p"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            <Button type="submit">
              {isSubmitting ? "Loading..." : "Register"}
            </Button>
          </Form>
        )}
      </Formik>

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
