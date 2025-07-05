import { useNavigate } from "react-router";

import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export default function AuthForm() {
  const navigate = useNavigate();

  return (
    <>
      <Grid
        size={6}
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ width: 3 / 4, p: 5 }}>
        <Grid container direction="column" spacing={2}>
          <Typography variant="h1" fontWeight="bold">
            Login
          </Typography>
          <TextField variant="outlined" label="Email"></TextField>
          <TextField variant="outlined" label="Password"></TextField>
          <Button variant="contained" onClick={() => navigate("/dashboard")}>
            Login
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
