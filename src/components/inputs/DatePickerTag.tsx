import { Stack, Grid, IconButton } from "@mui/material";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";

import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function DatePickerTag() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    console.log(event.target);
    setAnchorEl(event.target);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Stack direction="column" spacing="4px">
      <Typography variant="body1">Date of Birth*</Typography>
      <Grid
        container
        direction="row"
        sx={{
          px: "12px",
          py: "8px",
          border: 1,
          borderColor: "divider",
          borderRadius: "8px",
        }}>
        <Grid size={1}>
          <IconButton onClick={handleClick} sx={{ p: "4px" }}>
            <CalendarMonthRoundedIcon />
          </IconButton>
        </Grid>
        <Grid container size="grow" alignItems='center'>
          <Typography variant="body1">12-1-2022</Typography>
        </Grid>
      </Grid>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}>
        <DateCalendar
          onChange={(e) => {
            console.log(e);
            handleClose();
          }}
        />
      </Popover>
    </Stack>
  );
}
