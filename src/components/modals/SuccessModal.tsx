import { Button, Typography } from "@mui/material";
import { useModal } from "../../pages/dashboard/ModalContext";
import SuccessLogo from "@assets/success.png";

import Stack from "@mui/material/Stack";

import Grid from "@mui/material/Grid";

export default function SuccessModal({ mode }: { mode: string }) {
  const { closeModal } = useModal();

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      pt={2}>
      <img src={SuccessLogo} alt="warning-logo" />
      <Typography variant="h2" fontWeight="medium" color="black">
        {mode === "delete" ? "User Deleted" : "User Updated"}
      </Typography>
      <Typography
        variant="body1"
        textAlign="center"
        fontWeight="light"
        color="#2F2D2D">
        {mode === "delete"
          ? "Your changes have been saved successfully."
          : "User has been successfully deleted."}
      </Typography>
      <Grid
        container
        size={12}
        spacing={1}
        pt={4}
        width="100%"
        justifyContent="center"
        alignItems="center">
        <Button
          variant="contained"
          sx={{
            width: 1 / 2,
            fontWeight: "medium",
            bgcolor: "success.main",
            color: "white",
          }}
          onClick={() => closeModal()}>
          OK
        </Button>
      </Grid>
    </Stack>
  );
}
