import { useUserStore } from "@store/userStore";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import UserList from "./UserList";

const TableHead = () => {
  const columnStyle = { fontWeight: "medium", color: "primary.main" };
  const containerStyle = {
    direction: "row",
    backgroundColor: "secondary.main",
    borderTopLeftRadius: { xs: 0, md: 20 },
    borderTopRightRadius: { xs: 0, md: 20 },
    py: 2,
    minWidth: "780px",
  };

  return (
    <Grid container size={12} sx={containerStyle}>
      <Grid size={1} maxWidth={80} pl={2}>
        <Typography variant="body1" sx={columnStyle}>
          No.
        </Typography>
      </Grid>
      <Grid size={3} pl={2}>
        <Typography variant="body1" sx={columnStyle}>
          Name
        </Typography>
      </Grid>
      <Grid size={2} pl={2}>
        <Typography variant="body1" sx={columnStyle}>
          Role
        </Typography>
      </Grid>
      <Grid size={2} pl={2}>
        <Typography variant="body1" sx={columnStyle}>
          Phone no.
        </Typography>
      </Grid>
      <Grid size="grow" pl={2}>
        <Typography variant="body1" sx={columnStyle}>
          Email
        </Typography>
      </Grid>
    </Grid>
  );
};

export default function TableSection() {
  const userListsData = useUserStore((state) => state.UserLists);

  const userListStyle = {
    py: { xs: "6px", sm: "8px", lg: "12px" },
    borderBottom: 1,
    borderColor: "divider",
    minWidth: "780px",
  };

  const userListContainerStyle = {
    direction: "column",
    height: "auto",
    bgcolor: "white",
    borderBottomLeftRadius: { xs: 0, md: 20 },
    borderBottomRightRadius: { xs: 0, md: 20 },
    minWidth: "780px",
    overflowY: "auto",
  };

  const userLists =
    userListsData.length > 0 ? (
      userListsData.map((user, index) => (
        <Grid container size={12} key={index} sx={userListStyle}>
          <UserList key={index} data={user} index={index}></UserList>
        </Grid>
      ))
    ) : (
      <Grid container justifyContent="center" alignItems="center"  py={4} sx={{ width: '100%'}}>
        <Typography variant="body1">Not found user</Typography>
      </Grid>
    );

  return (
    <Grid
      size="grow"
      container
      direction="column"
      sx={{
        overflowY: "auto",
      }}>
      <Grid direction="column">
        <TableHead></TableHead>
        <Grid container size="grow" sx={userListContainerStyle}>
          {userLists}
        </Grid>
      </Grid>
    </Grid>
  );
}
