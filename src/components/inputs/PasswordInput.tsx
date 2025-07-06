import { useState } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

import { StyledInput } from "./CustomInputTag";

interface InputTagProps {
  title: string;
  placeholder?: string;
  icon?: string;
}

export default function PasswordInputTag({
  props,
  validate,
  errorMsg,
}: {
  props: InputTagProps;
  validate?: UseFormRegisterReturn;
  errorMsg?: string;
}) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const tagName = props.title.toLocaleLowerCase();
  const icon = props.icon ? (<img src={props.icon} alt="password-icon"></img>) : null;

  return (
    <FormControl variant="standard" fullWidth>
      <InputLabel shrink htmlFor={tagName}>
        {props.title}
      </InputLabel>
      <StyledInput
        placeholder={props.placeholder}
        id={tagName}
        type={showPassword ? "text" : "password"}
        startAdornment={icon}
        {...validate}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label={
                showPassword ? "hide the password" : "display the password"
              }
              onClick={handleClickShowPassword}
              edge="end">
              {showPassword ? (
                <VisibilityOffOutlinedIcon />
              ) : (
                <VisibilityOutlinedIcon />
              )}
            </IconButton>
          </InputAdornment>
        }
      />
      <FormHelperText>{errorMsg}</FormHelperText>
    </FormControl>
  );
}
