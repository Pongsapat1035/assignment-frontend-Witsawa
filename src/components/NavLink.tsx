import { useNavigate } from "react-router";
import { useAuthStore } from "@store/authStore";
import type { ReactNode } from "react";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

type InputProps = {
  title: string;
  to: string;
  icon: ReactNode;
};

export default function NavLink({ props }: { props: InputProps }) {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.userLogout);

  const handleClick = () => {
    props.title === "Logout" ? logout() : null;
    navigate(props.to);
  };

  const linkStyle = {
    border: 1,
    px: 4,
    py: 2,
    borderColor: "transparent",
    borderTopLeftRadius: 120,
    borderBottomLeftRadius: 120,
    cursor: "pointer",
    color: "white",
    transition: "all",
    transitionDuration: "1s",
    background: "rgba(255, 255, 255, 0)",

    "&:hover": {
      background:
        "linear-gradient(90deg,rgba(255, 255, 255, 1) 16%, rgba(255, 255, 255, .1) 100%)",
      color: "primary.main",
      "& p": {
        color: "primary.main",
      },
    },
  };

  return (
    <Stack direction="row" spacing={2} sx={linkStyle} onClick={handleClick}>
      {props.icon}
      <Typography variant="body1" color="white">
        {props.title}
      </Typography>
    </Stack>
  );
}
