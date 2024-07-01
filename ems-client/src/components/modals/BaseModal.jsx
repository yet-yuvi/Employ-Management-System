import { useContext } from "react";
import { ModalContext } from "../../context";
import {
  UserDetailDialog,
  DeleteDialog,
  EditDialog,
} from "../../components"

export const BaseModal = () => {
  const { showEditModal, showDeleteModal, showUserModal } =
    useContext(ModalContext);
  return (
    <div className="max-h-[80vh] overflow-y-auto">
      {(showUserModal) && <div className="z-50"><UserDetailDialog /></div>}
      {(showDeleteModal) && <div className="z-50"><DeleteDialog /></div>}
      {(showEditModal) && <div className="z-50"><EditDialog /></div>}
    </div>
  );
};
