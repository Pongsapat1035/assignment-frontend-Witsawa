import { Button, Typography } from "@mui/material";
import { useModal } from "../../pages/dashboard/ModalContext";
import WarningLogo from "@assets/warning.png";

import Stack from "@mui/material/Stack";

import Grid from "@mui/material/Grid";

export default function ConfirmModal() {
  const { closeModal } = useModal();
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={3}>
      <img src={WarningLogo} alt="warning-logo" />
      <Typography variant="h1" fontWeight="bold">
        Delete User?
      </Typography>
      <Typography variant="body1" textAlign="center">
        Are you sure you want to delete this user? This action cannot be undone,
        and the user will be unable to login.
      </Typography>
     
        <Grid container size={12} spacing={1} width='100%'>
          <Grid container size={6} spacing={1}>
            <Button variant="outlined" fullWidth >Cancel</Button>
          </Grid>
          <Grid container size={6} spacing={1}>
  
            <Button variant="contained" fullWidth sx={{ bgcolor: 'error.main', color: 'white' }}>Confirm</Button>
          </Grid>
        </Grid>
 
    </Stack>
  );
}
