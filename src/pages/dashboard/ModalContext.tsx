import { createContext, useContext, useState, type ReactNode } from "react";

import BaseModal from "../../components/Modal";

type ContextProps = {
  value: string;
  openModal: (el: ReactNode) => void;
  closeModal: () => void;
};

const ModalContext = createContext<ContextProps | null>(null);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode>(null);

  const openModalHandler = (el: ReactNode) => {
    setModalContent(el);
    setIsOpen(true);
  };

  const closeModalHanler = () => {
    setIsOpen(false);
    setModalContent(null);
  };

  return (
    <ModalContext.Provider
      value={{
        value: "hello",
        openModal: openModalHandler,
        closeModal: closeModalHanler,
      }}>
      {children}
      <BaseModal
        props={{
          isOpen,
          onClose: () => closeModalHanler(),
          element: modalContent,
        }}
      />
    </ModalContext.Provider>
  );
}

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
