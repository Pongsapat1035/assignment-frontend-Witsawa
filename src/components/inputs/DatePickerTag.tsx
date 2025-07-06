import { useState } from "react";
import { Controller, type Control } from "react-hook-form";

import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import FormHelperText from "@mui/material/FormHelperText";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

import dayjs from "dayjs";

interface ChildFormProps {
  control: Control<any>;
  errorMsg?: string;
}

export default function DatePickerTag({ control, errorMsg }: ChildFormProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null)

  const open = Boolean(anchorEl);
  const id = open ? "date-popover" : undefined;

  return (
    <Stack direction="column" spacing="4px" position="relative">
      <Typography variant="body1">Date of Birth*</Typography>
      <Controller
        name="birth"
        control={control}
        render={({ field: { onChange, value } }) => {
          const displayDate = value
            ? dayjs(value).format("YYYY-MM-DD")
            : "Select Date";

          const labelColor = displayDate === "Select Date" ? "text.disabled" : "primary.main";
          
          return (
            <>
              <Grid
                container
                direction="row"
                spacing={3}
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
                <Grid size="grow" container alignItems="center">
                  <Typography variant="body1" fontWeight="light" color={labelColor}>
                    {displayDate}
                  </Typography>
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
                  value={value ? dayjs(value) : null}
                  onChange={(newValue) => {
                    onChange(newValue ? newValue.toDate() : null);
                    handleClose();
                  }}
                />
              </Popover>
            </>
          );
        }}
      />
      <FormHelperText>{errorMsg}</FormHelperText>
    </Stack>
  );
}
