import React, { useState } from "react";
import { CheckBox, TextInput, PasswordField, ColorText } from "../components";

export const SignUp = () => {
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [check, setCheck] = useState(false);
  return (
    <>
      <div className="h-screen flex items-center justify-center bg-gray-100 font-poppins">
        <div className="max-h-80vh my-auto w-full xl:w-1/4 lg:w-1/4 md:w-1/3  text-center flex items-center justify-center bg-gray-50 p-6 shadow-md rounded-xl">
          <div>
            <div className="space-y-2 my-auto">
              <h1 className="text-3xl font-bold text-black-500">
                Sign Up Account
              </h1>
              <h2 className="text-lg font-medium text-gray-500">
                Start your demo version
              </h2>
            </div>
            <div className="flex items-center justify-between space-x-4 pt-8">
              <TextInput
                title="First Name*"
                required={true}
                placeholder="First Name"
                setValue={setFname}
              />
              <TextInput
                title="Last Name*"
                required={true}
                placeholder="Last Name"
                setValue={setLname}
              />
            </div>
            <div className="space-y-4 pt-6">
              <TextInput
                title="Email*"
                required={true}
                placeholder="Enter Your Email"
                setValue={setEmail}
              />
              <PasswordField
                title="Password*"
                required={true}
                placeholder="Password"
                setValue={setPassword}
              />
              <PasswordField
                title="Confirm Password*"
                required={true}
                placeholder="Confirm Password"
                setValue={setConfirmPassword}
              />
              <div className="w-full flex justify-between">
                <CheckBox
                  text="I want to receive inspiration, marketing promotions and updates via email."
                  setValue={setCheck}
                />
              </div>
            </div>
            <div className="mt-7 space-y-5">
              <button className="bg-black text-white w-full h-12 rounded-md">
                Sign Up
              </button>
            </div>
            <div className="mt-8">
              <div className="w-full flex justify-center">
                <div>
                  <h1 className="mr-2 text-gray-700 font-medium text-md">
                    Already have an account?
                  </h1>
                </div>
                <ColorText text="Sign In" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
