import { Grid, Typography } from "@mui/material";
import UserList from "./UserList";

export default function TableSection() {
  const userLists = new Array(10).fill("").map((_, index) => (
    <Grid
      container
      size={12}
      py="12px"
      borderBottom={1}
      borderColor="divider"
      key={index}>
      <UserList key={index}></UserList>
    </Grid>
  ));
  return (
    <Grid size="grow" container direction="column" borderRadius={20}>
      <Grid
        container
        direction="row"
        size={12}
        bgcolor="secondary.main"
        sx={{ borderTopLeftRadius: 20, borderTopRightRadius: 20, py: 2 }}>
        <Grid size={1} pl={2}>
          <Typography variant="body1" fontWeight="bold" color="primary.main">
            No.
          </Typography>
        </Grid>
        <Grid size={4} pl={2}>
          <Typography variant="body1" fontWeight="bold" color="primary.main">
            Name
          </Typography>
        </Grid>
        <Grid size={2} pl={2}>
          <Typography variant="body1" fontWeight="bold" color="primary.main">
            Role
          </Typography>
        </Grid>
        <Grid size={2} pl={2}>
          <Typography variant="body1" fontWeight="bold" color="primary.main">
            Phone no.
          </Typography>
        </Grid>
        <Grid size={3} pl={2}>
          <Typography variant="body1" fontWeight="bold" color="primary.main">
            Email
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        size="grow"
        bgcolor="white"
        height="auto"
        sx={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
        {userLists}
      </Grid>
    </Grid>
  );
}
