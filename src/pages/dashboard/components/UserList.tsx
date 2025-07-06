import { useState } from "react";
import { useUserStore } from "@store/userStore";
import { useModal } from "../ModalContext";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ConfirmModal from "@components/modals/ConfirmModal";
import UserFormModal from "@components/UserFormModal";
import Divider from "@mui/material/Divider";
import SuccessModal from "@components/modals/SuccessModal";
import BinIcon from "@assets/icons/bin.png";
import EditIcon from "@assets/icons/edit.png";

import type { UserData } from "types";
import { convertPhoneFormat } from "../../../utils/format";

export default function UserList({
  data,
  index,
}: {
  data: UserData;
  index: number;
}) {
  const style = {
    pl: 2,
    borderRight: 1,
    borderColor: "divider",
    alignItems: "center",
  };

  const textStyle = { fontSize: { xs: 14, lg: 16 }, fontWeight: "light" };

  return (
    <>
      <Grid container size={1} maxWidth={80} sx={style}>
        <Typography variant="body1" sx={textStyle}>
          {index + 1}
        </Typography>
      </Grid>
      <Grid container size={3} minWidth={150} sx={style}>
        <Typography variant="body1" sx={textStyle}>
          {data.titleName} {data.firstname} {data.surname}
        </Typography>
      </Grid>
      <Grid container size={2} minWidth={120} sx={style}>
        <Typography variant="body1" sx={textStyle}>
          {data.role}
        </Typography>
      </Grid>
      <Grid container size={2} minWidth={105} sx={style}>
        <Typography variant="body1" sx={textStyle}>
          {convertPhoneFormat(data.phone)}
        </Typography>
      </Grid>
      <Grid
        container
        size={"grow"}
        sx={{
          pl: 2,
          borderRight: 1,
          borderColor: { xs: "transparent", lg: "divider" },
          alignItems: "center",
        }}>
        <Typography variant="body1" sx={textStyle}>
          {data.email}
        </Typography>
      </Grid>
      <Menu userId={data.id}></Menu>
    </>
  );
}

const Menu = ({ userId }: { userId: string }) => {
  const { openModal } = useModal();
  const deleteUser = useUserStore((state) => state.deleteUser);

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const isOpen = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);

  const handleEditUser = () => {
    openModal(<UserFormModal isEdit={true} userId={userId}></UserFormModal>);
    setAnchorEl(null);
  };

  const confirmDelete = () => {
    openModal(<SuccessModal mode="delete"></SuccessModal>);
    deleteUser(userId);
  };

  const handleDeleteUser = () => {
    openModal(
      <ConfirmModal
        props={{
          mode: "delete",
          action: confirmDelete,
        }}></ConfirmModal>
    );
    setAnchorEl(null);
  };

  const buttonContainerStyle = { maxWidth: 80, pl: 2, alignItems:"center", justifyContent:'center' }

  return (
    <>
      <Grid container size={1} sx={buttonContainerStyle}>
        <IconButton sx={{ p: "4px" }} onClick={handleClick}>
          <MoreHorizRoundedIcon sx={{ color: "#5D59EB" }} />
        </IconButton>
      </Grid>
      <Popover
        id="menu-propover"
        open={isOpen}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        slotProps={{
          paper: {
            sx: {
              boxShadow: "none",
              borderRadius: 3,
              border: "1px solid #B3B3B3",
            },
          },
        }}>
        <Stack direction="column" sx={{ minWidth: 200 }}>
          <Button
            variant="dropdownMenu"
            startIcon={<img src={EditIcon} alt="edit-icon" />}
            onClick={handleEditUser}>
            Edit
          </Button>
          <Divider></Divider>
          <Button
            variant="dropdownMenu"
            startIcon={<img src={BinIcon} alt="bin-icon" />}
            onClick={handleDeleteUser}
            sx={{ color: "error.main" }}>
            Delete
          </Button>
        </Stack>
      </Popover>
    </>
  );
};
