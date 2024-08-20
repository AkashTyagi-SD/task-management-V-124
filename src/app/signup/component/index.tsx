"use client";

import { FC } from "react";
import { TypeOf, object, string } from "zod";
import { Formik, Form, Field } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";

type SignUpFormInput = TypeOf<typeof signUpFormSchema>;

const signUpFormSchema = object({
  name: string({ required_error: "Please enter full name" }),
  email: string({ required_error: "Please enter your email" }).email(
    "Please enter a valid email"
  ),
  password: string({ required_error: "Please enter your password" }),
});

const Signup: FC = () => {
  const handleSubmit = (values: any) => {
    console.log("values", values);
  };

  return (
    <>
      <Formik<SignUpFormInput>
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
        validationSchema={toFormikValidationSchema(signUpFormSchema)}
      >
        {(FormikState) => {
          const errors = FormikState.errors;
          return (
            <div className="flex h-screen items-center justify-center bg-cyan-800">
              <Form className="w-96 p-6 shadow-lg bg-white rounded-md">
                <h1 className="font-bold text-cyan-800 text-3xl text-center">
                  Signup
                </h1>
                <div className="mt-4">
                  <label htmlFor="name" className="block text-base mb-2">
                    Name
                  </label>
                  <Field
                    type="text"
                    name="name"
                    className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                    placeholder="Enter full name..."
                  />
                  {!!errors.name && (
                    <div className="text-red-700">{errors.name}</div>
                  )}
                </div>
                <div className="mt-4">
                  <label htmlFor="email" className="block text-base mb-2">
                    Email
                  </label>
                  <Field
                    type="text"
                    name="email"
                    className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                    placeholder="Enter email..."
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
                    className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                    placeholder="Enter password..."
                  />
                  {!!errors.password && (
                    <div className="text-red-700">{errors.password}</div>
                  )}
                </div>
                <div className="mt-5">
                  <button className="border-2 border-cyan-800 bg-cyan-800 text-white py-1 w-full">
                    Signup
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

export default Signup;
