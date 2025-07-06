import { useNavigate } from "react-router";
import { useAuthStore } from "@store/authStore";

import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";

import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import ContactEmergencyRoundedIcon from "@mui/icons-material/ContactEmergencyRounded";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";


const navLists = [
  { icon: <PersonRoundedIcon />, name: "User List", to: "/dashboard" },
  { icon: <BusinessCenterRoundedIcon />, name: "Company", to: "/dashboard" },
  { icon: <ContactEmergencyRoundedIcon />, name: "Role Permission", to: "/dashboard" },
  { icon: <SettingsRoundedIcon />, name: "Setting", to: "/dashboard" },
  { icon: <ExitToAppRoundedIcon />, name: "Logout", to: "/dashboard" },
];

export default function BasicSpeedDial() {
  const navigate = useNavigate();
  const logout = useAuthStore((state) => state.userLogout);

  const handleClick = (title: string) => {
    if (title === "Logout") {
      logout();
      navigate("/");
    }
  };

  return (
    <Box sx={{ transform: "translateZ(0px)", flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{
          position: "fixed",
          bottom: 16,
          left: 16,
          display: {
            xs: "flex",
            lg: "none",
          },
        }}
        icon={<SpeedDialIcon />}>
        {navLists.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => handleClick(action.name)}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
