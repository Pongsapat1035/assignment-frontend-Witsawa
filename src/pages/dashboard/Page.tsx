import { useEffect } from "react";

import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";

import QuerySection from "./components/querySection";
import TableSection from "./components/TableSection";
import AvatarIcon from "@assets/icons/avatar.png";

import { useAuthStore } from "@store/authStore";

export default function DashboardPage() {
  const loadProfile = useAuthStore((state) => state.loadProfile);
  const userInfo = useAuthStore((state) => state.userInfo);

  useEffect(() => {
    loadProfile();
  }, []);

  return (
    <Grid
      container
      direction="column"
      spacing={2}
      sx={{ height: "100vh", p: { xs: 2, sm: 3, md: 5 } }}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        width="100%">
        <Typography variant="h2" fontWeight="medium">
          User List
        </Typography>
        <Stack direction="row" alignItems="center" spacing={1}>
          <img src={AvatarIcon} alt="avatar-icon" />
          <Typography
            variant="body1"
            fontWeight="regular"
            sx={{ display: { xs: "none", sm: "block" } }}>
            {userInfo.name}
          </Typography>
        </Stack>
      </Grid>
      <QuerySection></QuerySection>
      <TableSection></TableSection>
      <Grid container direction="row" justifyContent="end" sx={{ pl: 10 }}>
        <Pagination count={50} variant="outlined" shape="rounded" />
      </Grid>
    </Grid>
  );
}
