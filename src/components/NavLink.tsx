import { useNavigate } from "react-router";

import { Stack, Typography } from "@mui/material";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

type InputProps = {
  title: string;
  to: string
};

export default function NavLink({ props }: { props: InputProps }) {
    const navigate = useNavigate()

  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        border: 1,
        px: 4,
        py: 1,
        borderColor: "transparent",
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        cursor: "pointer",
        color: "white",
        transition: "all",
        transitionDuration: '.5s',
        "&:hover": {
          bgcolor: "white",
          color: "blue",
        },
      }} onClick={()=> navigate(props.to)}>
      <AccountCircleRoundedIcon></AccountCircleRoundedIcon>
      <Typography variant="body1">{props.title}</Typography>
    </Stack>
  );
}
