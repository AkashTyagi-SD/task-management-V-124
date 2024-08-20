"use client";

import { FC } from "react";
import { Formik, Form, Field } from "formik";
import { TypeOf, object, string } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";

type ForgotPasswordFormInput = TypeOf<typeof forgotPasswordFormSchema>;

const forgotPasswordFormSchema = object({
  password: string({ required_error: "Please enter new password" }),
  confirmPassword: string({ required_error: "Please enter confirm password" }),
});

const ForgotPassword: FC = () => {
  const handleSubmit = (values: any) => {
    console.log("values", values);
  };
  return (
    <>
      <Formik<ForgotPasswordFormInput>
        initialValues={{
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
        validationSchema={toFormikValidationSchema(forgotPasswordFormSchema)}
      >
        {(FormikState) => {
          const errors = FormikState.errors;
          return (
            <div
              className={`flex h-screen justify-center items-center bg-cyan-800`}
            >
              <Form className="w-96 p-6 shadow-lg bg-white rounded-md">
                <h1 className="font-bold text-cyan-800 text-3xl text-center">
                  Forgot Password
                </h1>
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
                <div className="mt-4">
                  <label htmlFor="password" className="block text-base mb-2">
                    Confirm Password
                  </label>
                  <Field
                    type="text"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                  />
                  {!!errors.confirmPassword && (
                    <div className="text-red-700">{errors.confirmPassword}</div>
                  )}
                </div>

                <div className="mt-5">
                  <button className="border-2 border-cyan-800 bg-cyan-800 text-white py-1 w-full">
                    Forgot password
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

export default ForgotPassword;
