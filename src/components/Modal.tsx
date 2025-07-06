import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import type { ReactNode } from "react";

type InputProps = {
  isOpen: boolean;
  onClose: Function;
  element: ReactNode;
};

export default function BaseModal({ props }: { props: InputProps }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: { xs: 0, sm: 8 },
    width: { xs: '100%',sm: 2/3, lg:1 / 3},
    height: { xs: "100%", sm: 'auto' },
    bgcolor: "background.paper",
    boxShadow: 24,
    py: 4,
    px: { xs: 4, sm: 6 },
  };

  return (
    <div>
      <Modal open={props.isOpen} onClose={() => props.onClose()}>
        <Box sx={style}>{props.element}</Box>
      </Modal>
    </div>
  );
}
