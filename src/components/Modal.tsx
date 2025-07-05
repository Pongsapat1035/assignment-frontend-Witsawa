import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import type { ReactNode } from "react";
import CreateUserForm from "./CreateUserForm";
import ConfirmModal from "./modals/ConfirmModal";


type InputProps = {
  isOpen: boolean;
  onClose: Function;
  element: ReactNode;
};

export default function BaseModal({ props }: { props: InputProps }) {
  return (
    <div>
      <Modal
        open={props.isOpen}
        onClose={() => props.onClose()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: 8,
            width: 1/3,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 6,
          }}>
          {/* {props.element} */}
          <ConfirmModal></ConfirmModal>
        </Box>
      </Modal>
    </div>
  );
}
