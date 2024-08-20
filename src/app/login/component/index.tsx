"use client";

import Link from "next/link";
import { FC } from "react";
import { TypeOf, object, string } from "zod";
import { Formik, Form, Field } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";

type LoginFormInput = TypeOf<typeof loginFormSchema>;

const loginFormSchema = object({
  email: string({ required_error: "Please enter your email" }).email(
    "Please enter a valid email"
  ),
  password: string({ required_error: "Please enter your password" }),
});

const Login: FC = () => {
  const handleSubmit = (values: any) => {
    const { email, password } = values;
    console.log("Form is submitted", email);
  };

  return (
    <>
      <Formik<LoginFormInput>
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
        validationSchema={toFormikValidationSchema(loginFormSchema)}
      >
        {(FormikState) => {
          const errors = FormikState.errors;
          return (
            <div
              className={`flex h-screen justify-center items-center bg-cyan-800`}
            >
              <Form className="w-96 p-6 shadow-lg bg-white rounded-md">
                <h1 className="font-bold text-cyan-800 text-3xl text-center">
                  Login
                </h1>
                <div className="mt-4">
                  <label htmlFor="email" className="block text-base mb-2">
                    Email
                  </label>
                  <Field
                    type="text"
                    name="email"
                    placeholder="test@gmail.com"
                    className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                  />
                  {!!errors.email && (
                    <div className="text-red-700">{errors.email}</div>
                  )}
                </div>
                <div className="mt-4">
                  <label htmlFor="password" className="block text-base mb-2">
                    Password
                  </label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="******"
                    className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                  />
                  {!!errors.password && (
                    <div className="text-red-700">{errors.password}</div>
                  )}
                </div>
                <div className="mt-3 flex justify-between items-center">
                  <div>
                    <input type="checkbox" />
                    <label className="ml-2">Remember Me</label>
                  </div>
                  <div>
                    <Link
                      href={"/forgot-password"}
                      className="hover:underline text-cyan-800"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                </div>
                <div className="mt-5">
                  <button className="border-2 border-cyan-800 bg-cyan-800 text-white py-1 w-full">
                    Login
                  </button>
                </div>
              </Form>
            </div>
          );
        }}
      </Formik>
    </>
  );
};

export default Login;
