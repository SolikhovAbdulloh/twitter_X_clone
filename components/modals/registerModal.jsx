import useRegisterModal from "@/hook/useRegistonModal";
import React from "react";
import Modal from "../ui/modal";
import { X } from "lucide-react";

function RegisterModal() {
  const registerModal = useRegisterModal();
  const body = (
    <div className="flex flex-col">
      <button
        onClick={registerModal.onClose}
        className="p-2 hover:opacity-70 transition w-fit border-0 cursor-pointer"
      >
        <X size={28} />
      </button>
    </div>
  );
  const footer = <div>footer Content</div>;
  return (
    <Modal
      body={body}
      footer={footer}
      isOpen={registerModal.isOpen}
      Onclose={registerModal.onClose}
    />
  );
}

export default RegisterModal;
