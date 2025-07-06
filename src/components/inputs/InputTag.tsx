import type { UseFormRegisterReturn } from "react-hook-form";

import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";

import { StyledInput } from "./CustomInputTag";

interface InputTagProps {
  title: string;
  placeholder?: string;
  icon?: string;
}

export default function InputTag({
  props,
  validate,
  errorMsg,
}: {
  props: InputTagProps;
  validate: UseFormRegisterReturn;
  errorMsg?: string;
}) {
  const lowerTitle = props.title.toLocaleLowerCase();

  const icon = props.icon ? (
    <img src={props.icon} alt={`logo-${lowerTitle}`}></img>
  ) : null;

  return (
    <FormControl variant="standard">
      <InputLabel shrink htmlFor={`${lowerTitle}-input`}>
        {props.title}
      </InputLabel>
      <StyledInput
        placeholder={props.placeholder}
        id={`${lowerTitle}-input`}
        {...validate}
        startAdornment={icon}
      />
      <FormHelperText>{errorMsg}</FormHelperText>
    </FormControl>
  );
}
