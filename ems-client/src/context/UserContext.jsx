import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  
    const [ user ] = useState({

        fname: 'John',
        lname: "Connor",
        email: 'john@mail.com',
        age: 33,
        department: 'Engineering',
        position: 'Hiring Manager',
        salary: 40000,
        phone: '043162567',
        address: 'Banani, Dhaka',
        userType: 'Admin',
      });

  return (
    <UserContext.Provider
      value={{
        user
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
