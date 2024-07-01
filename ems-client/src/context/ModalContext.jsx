import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showUserModal, setShowUserModal] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        showEditModal,
        showDeleteModal,
        showUserModal,
        setShowEditModal,
        setShowDeleteModal,
        setShowUserModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
