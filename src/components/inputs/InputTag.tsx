import InputBase from "@mui/material/InputBase";
import { alpha, styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

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

export default function InputTag() {
  return (
    <FormControl variant="standard">
      <InputLabel shrink htmlFor="bootstrap-input" sx={{ fontSize: 20 }}>
        Role*
      </InputLabel>
      <StyledInput
        placeholder="Example"
        id="bootstrap-input"
        startAdornment={<EmailRoundedIcon />}
      />
    </FormControl>
  );
}
