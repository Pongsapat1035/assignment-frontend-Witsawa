import { Outlet } from "react-router";
import NavLink from "./NavLink";

import Logo from "../assets/Logo.png";
import { ModalProvider } from "../pages/dashboard/ModalContext";
import Grid from "@mui/material/Grid";

import { useUserStore } from "@store/userStore";
import { useEffect } from "react";
import MobileNav from "./MobileNav";

import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import ContactEmergencyRoundedIcon from "@mui/icons-material/ContactEmergencyRounded";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

const navLists = [
  {
    title: "User List",
    to: "/dashboard",
    icon: <PersonRoundedIcon />,
  },
  {
    title: "Company",
    to: "/dashboard",
    icon: <BusinessCenterRoundedIcon />,
  },
  {
    title: "Role Permission",
    to: "/dashboard",
    icon: <ContactEmergencyRoundedIcon />,
  },
  {
    title: "Setting",
    to: "/dashboard",
    icon: <SettingsRoundedIcon />,
  },
];

export default function Layout() {
  const loadUsers = useUserStore((state) => state.loadUsers);

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <ModalProvider>
      <Grid
        container
        height="100vh"
        sx={{
          background:
            "linear-gradient(to bottom right, #ffffff 0%, #dee3ff 100%)",
        }}>
        <Grid
          container
          alignItems="end"
          size={{ lg: 3, xl: 2 }}
          sx={{ display: { xs: "none", lg: "flex" } }}>
          <Grid
            container
            direction="column"
            justifyContent="space-between"
            sx={{
              marginTop: 5,
              height: "95%",
              width: "100%",
              borderTopRightRadius: 40,
              pl: { xs: 2, xl: 4 },
              background:
                "linear-gradient(0deg,#6A55DF 0%, #4D97E2 50%, #112D75 100%)",
            }}>
            <Grid size={2} py={6}>
              <img width={250} src={Logo} alt="Logo" />
            </Grid>
            <Grid container direction="column" size="grow" spacing={2}>
              {navLists.map((item, index) => (
                <NavLink key={index} props={item}></NavLink>
              ))}
            </Grid>
            <Grid size={2} width="100%" pb={6}>
              <NavLink
                props={{
                  title: "Logout",
                  to: "/",
                  icon: <ExitToAppRoundedIcon />,
                }}></NavLink>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ md: 12, lg: 9, xl: 10 }} sx={{ overflow: "scroll" }}>
          <Outlet></Outlet>
          <MobileNav></MobileNav>
        </Grid>
      </Grid>
    </ModalProvider>
  );
}
