import { Grid } from "@mui/material";
import { Outlet } from "react-router";
import NavLink from "./NavLink";

import Logo from "../assets/Logo.png";
import { ModalProvider } from "../pages/dashboard/ModalContext";

const navLists = [
  {
    title: "User List",
    to: "/",
  },
  {
    title: "Company",
    to: "/",
  },
  {
    title: "Role Permission",
    to: "/",
  },
];

export default function Layout() {
  return (
    <ModalProvider>
      <Grid
        container
        height="100vh"
        sx={{
          background:
            "linear-gradient(to bottom right, #ffffff 0%, #dee3ff 100%)",
        }}>
        <Grid container alignItems="end" size={2}>
          <Grid
            container
            direction="column"
            mt={5}
            justifyContent="space-between"
            height="95%"
            width="100%"
            sx={{
              borderTopRightRadius: 40,
              pl: 4,
              background:
                "linear-gradient(0deg,#6A55DF 0%, #4D97E2 50%, #112D75 100%)"
            }}>
            <Grid size={2} py={6}>
              <img width={250} src={Logo} alt="Logo" />
            </Grid>
            <Grid container direction="column" size="grow" spacing={4}>
              {navLists.map((item, index) => (
                <NavLink key={index} props={item}></NavLink>
              ))}
            </Grid>
            <Grid size={2} width="100%" pb={6}>
              <NavLink props={{ title: "Logout", to: "/" }}></NavLink>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={10}>
          <Outlet></Outlet>
        </Grid>
      </Grid>
    </ModalProvider>
  );
}
