import { Grid, Stack, Typography, Pagination } from "@mui/material";
import QuerySection from "./components/querySection";
import { useModal } from "./ModalContext";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import TableSection from "./components/TableSection";

export default function DashboardPage() {
  const { value } = useModal();
  console.log(value);
  return (
    <Grid container direction="column" spacing={2} p={5} height='100vh'>
      <Grid size={2} container direction="row" justifyContent="space-between" width="100%">
        <Typography variant="h2" fontWeight="semibold">
          User List
        </Typography>
        <Stack direction="row" alignItems="center" spacing={2}>
          <AccountCircleRoundedIcon></AccountCircleRoundedIcon>
          <Typography variant="body1">Nantiya Kaewta</Typography>
        </Stack>
      </Grid>
      <QuerySection></QuerySection>
      <TableSection></TableSection>
      <Grid container direction="row" justifyContent="end">
        <Pagination count={10} variant="outlined" shape="rounded" />
      </Grid>
    </Grid>
  );
}
