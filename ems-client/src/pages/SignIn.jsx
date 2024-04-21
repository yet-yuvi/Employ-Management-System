import React, { useState } from 'react';
import { CheckBox, TextInput, PasswordField, ColorText } from "../components";

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [check, setCheck] = useState(false);
  return (
    <>
      <div className="h-screen flex items-end justify-center bg-gray-100 font-poppins">
        
        <div className="max-h-80vh my-auto w-full xl:w-1/4 lg:w-3/4 text-center flex items-center justify-center bg-gray-50 p-6 shadow-md rounded-xl">
          <div>
            <div className="space-y-2 my-auto">
              <h1 className="text-3xl font-bold text-black-500">
                Sign in to your account
              </h1>
              <h2 className="text-lg font-medium text-gray-500">
                Start your demo version
              </h2>
            </div>
            <div className="space-y-4 pt-8">
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
              <div className="w-full flex justify-between">
                <CheckBox text='Remember Me' setValue={setCheck} />
                <ColorText text='Forgot your password?' />
              </div>
            </div>
            <div className="mt-7 space-y-5">
              <button className="bg-black text-white w-full h-12 rounded-md">
                Sign In
              </button>
            </div>
            <div className="mt-8">
              <div className="w-full flex justify-center">
                <div>
                  <h1
                    className="mr-2 text-gray-700 font-medium text-md"
                  >
                    DON'T HAVE AN ACCOUNT?
                  </h1>
                </div>
                <ColorText text='Sign Up' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}