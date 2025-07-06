import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

import { useModal } from "../../pages/dashboard/ModalContext";
import WarningLogo from "@assets/warning.png";

type InputProps = {
  mode: string;
  action?: () => void;
};

export default function ConfirmModal({ props }: { props: InputProps }) {
  const { closeModal } = useModal();

  const handleSubmit = () => {
    if (props.action) {
      props.action();
    }
  };

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      pt={2}>
      <img src={WarningLogo} alt="warning-logo" />
      <Typography variant="h2" fontWeight="medium" color="black">
        {props.mode === "delete" ? "Delete User?" : "Save Changes?"}
      </Typography>
      <Typography
        variant="body1"
        textAlign="center"
        fontWeight="light"
        color="#2F2D2D">
        {props.mode === "delete"
          ? "Are you sure you want to delete this user? This action cannot be undone, and the user will be unable to login."
          : "Do you want to save your user updates?"}
      </Typography>
      <Grid container size={12} spacing={1} pt={4} width="100%">
        <Grid container size={6} spacing={1}>
          <Button
            variant="outlined"
            fullWidth
            sx={{
              fontWeight: "light",
              color: "#2F2D2D",
              borderColor: "#2F2D2D",
            }}
            onClick={() => closeModal()}>
            Cancel
          </Button>
        </Grid>
        <Grid container size={6} spacing={1}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              fontWeight: "medium",
              bgcolor: "warning.main",
              color: "white",
            }}
            onClick={handleSubmit}>
            Confirm
          </Button>
        </Grid>
      </Grid>
    </Stack>
  );
}
