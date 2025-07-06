import AuthForm from "./AuthForm";
import Logo from "@assets/Logo.png";
import BackGround from "@assets/auth-background.png";

import Grid from "@mui/material/Grid";

export default function AuthPage() {
  const containerStyle = {
    direction: { xs: "column", md: "row" },
    borderRadius: { xs: 0, md: 2 },
    background: `url(${BackGround})`,
    width: { xs: "100%", lg: "80%", xl: "60%" },
    height: { xs: "100%", lg: "80%" },
  };

  const authContainerStyle = {
    order: { xs: 2, md: 1 },
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to bottom right, #ffffff 0%, #dee3ff 100%)",
    borderTopRightRadius: { xs: 50, md: 40 },
    borderBottomRightRadius: { xs: 0, md: 40 },
    borderTopLeftRadius: { xs: 50, md: 5 },
    borderBottomLeftRadius: { xs: 0, md: 5 },
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      height="100vh"
      sx={{
        background:
          "linear-gradient(to top right, #ffffff 0%, #dee3ff 100%)",
      }}>
      <Grid container sx={containerStyle}>
        <Grid container size={{ xs: 12, md: 6 }} sx={authContainerStyle}>
          <AuthForm></AuthForm>
        </Grid>
        <Grid
          size={{ xs: 12, md: 6 }}
          order={{ xs: 1, md: 2 }}
          container
          justifyContent="center"
          alignItems="center"
          height={{ xs: 200, md: "auto" }}>
          <img src={Logo} alt="Logo" />
        </Grid>
      </Grid>
    </Grid>
  );
}
