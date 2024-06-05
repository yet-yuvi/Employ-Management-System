import React, { useState } from "react";
import { TextInput, PasswordField } from "../../components";

export const EditDialog = () => {
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState("");
  const [position, setPosition] = useState("");
  const [salary, setSalary] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [userType, setUserType] = useState("");

  return (
    <>
      <div className="h-full flex items-center justify-center font-poppins">
        <div className="max-h-80vh my-auto w-full text-center flex items-center justify-center bg-gray-100 p-6 shadow-md rounded-2xl border-2">
          <div>
            <div className="space-y-2 my-auto">
              <h1 className="text-3xl font-bold text-black-500">Edit User</h1>
            </div>
            <div className="flex items-center justify-between space-x-4 pt-2">
              <TextInput
                type="text"
                title="First Name*"
                required={true}
                placeholder="First Name"
                setValue={setFname}
              />
              <TextInput
                type="text"
                title="Last Name*"
                required={true}
                placeholder="Last Name"
                setValue={setLname}
              />
            </div>

            <div className="flex items-center justify-between space-x-4 pt-2">
              <TextInput
                type="number"
                title="Age*"
                required={true}
                placeholder="Age"
                setValue={setAge}
                className="w-1/3"
              />
              <TextInput
                type="number"
                title="Phone No*"
                required={true}
                placeholder="Phone No"
                setValue={setPhone}
                className="w-2/3"
              />
            </div>

            <div className="flex items-center justify-between space-x-4 pt-2">
              <TextInput
                type="text"
                title="Depertment*"
                required={true}
                placeholder="Depertment"
                setValue={setDepartment}
              />
              <TextInput
                type="text"
                title="Position*"
                required={true}
                placeholder="Position"
                setValue={setPosition}
              />
            </div>

            <div className="space-x-4 pt-2">
              <TextInput
                type="number"
                title="Salary*"
                required={true}
                placeholder="Salary"
                setValue={setSalary}
              />
            </div>

            <div className="space-x-4 pt-2">
              <TextInput
                type="email"
                title="Email*"
                required={true}
                placeholder="Enter Your Email"
                setValue={setEmail}
              />
            </div>

            <div className="space-y-2 pt-2">
              <TextInput
                type="text"
                title="Address*"
                required={true}
                placeholder="Address"
                setValue={setAddress}
              />
            </div>

            <div className="space-y-2 pt-2">
              <label className="text-left block text-lg font-medium text-gray-800">
                User Type*
              </label>
              <select
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                className="border border-gray-300 ring-1 ring-gray-200 py-2.5 px-3.5 w-full rounded-md bg-white text-base placeholder-gray-300"
                required
              >
                <option value="" disabled>
                  Select User Type
                </option>
                <option value="User">User</option>
                <option value="Admin">Admin</option>
              </select>
            </div>

            <div className="flex flex-row gap-6 justify-center mt-4">
              <button className="text-lg hover:bg-blue-400 hover:text-white transition-all duration-300 text-blue-400 font-custom-bold py-2 px-6 rounded-3xl">
                Edit
              </button>
              <button className="text-lg hover:bg-blue-400 hover:text-white transition-all duration-300 text-blue-400 font-custom-bold py-2 px-4 rounded-3xl">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
