import InputBase from "@mui/material/InputBase";
import { alpha, styled } from "@mui/material/styles";

export const StyledInput = styled(InputBase)(({ theme }) => ({
  fontWeight: 300,
  "label + &": {
    marginTop: theme.spacing(3),
    border: "1px solid",
    borderColor: "#B3B3B3",
    color: theme.palette.primary.main,
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
    "::placeholder": {
      color: theme.palette.text.disabled,
      opacity: 1,
    },
  },
  "&.Mui-focused": {
    borderColor: theme.palette.primary.main,
    boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
  },
}));
