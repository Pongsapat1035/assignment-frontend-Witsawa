import { Grid } from "@mui/material";
import AuthForm from "./AuthForm";
import Logo from '../../assets/Logo.png'
import BackGround from "@assets/auth-background.png"


export default function AuthPage() {
  return (
    <Grid container justifyContent="center" alignItems="center" height="100vh">
      <Grid container width="60%" height="80%"  borderRadius={2} sx={{ background: `url(${BackGround})` }}>
        <Grid
          container
          size={6}
          justifyContent="center"
          alignItems="center"
          sx={{
            bgcolor: 'white',
            borderTopRightRadius: 40,
            borderBottomRightRadius: 40,
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5,
            border: 1,
          }}>
          <AuthForm></AuthForm>
        </Grid>
        <Grid size={6} container justifyContent='center' alignItems='center' >
          <img src={Logo} alt="Logo" />
        </Grid>
      </Grid>
    </Grid>
  );
}
