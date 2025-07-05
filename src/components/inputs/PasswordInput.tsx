import InputBase from "@mui/material/InputBase";
import { alpha, styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import * as React from 'react';
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";

import LockOutlineRoundedIcon from '@mui/icons-material/LockOutlineRounded';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

const StyledInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
    border: "1px solid",
    borderColor: theme.palette.divider,
    padding: "6px 12px",
    borderRadius: 8,
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
  },
  "& .MuiInputBase-input": {
    marginLeft: 8,
  },
  "&.Mui-focused": {
    borderColor: theme.palette.primary.main,
    boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
  },
}));

export default function PasswordInputTag() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);


  return (
    <FormControl variant="standard" fullWidth>
      <InputLabel shrink htmlFor="outlined-adornment-password" sx={{ fontSize: 20 }}>Password</InputLabel>
       <StyledInput
        placeholder="Example"
        id="bootstrap-input"
        type={showPassword ? "text" : "password"}
        startAdornment={<LockOutlineRoundedIcon />}
         endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label={
                showPassword ? "hide the password" : "display the password"
              }
              onClick={handleClickShowPassword}
              edge="end">
              {showPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
}
