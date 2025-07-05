import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import Popover from "@mui/material/Popover";
import { useState } from "react";
import Button from "@mui/material/Button";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Stack from "@mui/material/Stack";

export default function UserList() {
  const style = {
    pl: 2,
    borderRight: 1,
    borderColor: "divider",
    alignItems: "center",
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <Grid container size={1} sx={style}>
        <Typography variant="body1">1</Typography>
      </Grid>
      <Grid container size={4} sx={style}>
        <Typography variant="body1">Ms. Ornurai Mahaseri</Typography>
      </Grid>
      <Grid container size={2} sx={style}>
        <Typography variant="body1">Entrepreneur</Typography>
      </Grid>
      <Grid container size={2} sx={style}>
        <Typography variant="body1">098-325-4557</Typography>
      </Grid>
      <Grid container size={2} sx={style}>
        <Typography variant="body1">example@mail.com</Typography>
      </Grid>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        size={1}
        pl={2}>
        <IconButton sx={{ p: "4px" }} onClick={handleClick}>
          <MoreHorizRoundedIcon />
        </IconButton>
      </Grid>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}>
        <Stack direction="column">
          <Button
            variant="dropdownMenu"
            startIcon={<BorderColorOutlinedIcon />}>
            Edit
          </Button>
          <Button
            variant="dropdownMenu"
            startIcon={<DeleteOutlineOutlinedIcon />}>
            Delete
          </Button>
        </Stack>
      </Popover>
    </>
  );
}
