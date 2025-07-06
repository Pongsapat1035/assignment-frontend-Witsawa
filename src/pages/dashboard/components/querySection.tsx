import { useState } from "react";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import ControlPointRoundedIcon from "@mui/icons-material/ControlPointRounded";
import InputAdornment from "@mui/material/InputAdornment";
import CreateUserFormModal from "@components/UserFormModal";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import { type SelectChangeEvent } from "@mui/material/Select";
import { useUserStore } from "@store/userStore";
import { useModal } from "../ModalContext";

const columnStyle = { display: "flex", alignItems: "center" };

export default function QuerySection() {
  const { openModal } = useModal();
  const { updateRole, updateSearchText, loadUsers } = useUserStore((state) => state);

  const [role, setRole] = useState("None");
  const [searchText, setSearchText] = useState("");

  const handleChange = (e: SelectChangeEvent) => {
    const { value } = e.target;
    setRole(value);
    updateRole(value);
    loadUsers();
  };

  const handleSearch = () => {
    updateSearchText(searchText);
    loadUsers();
  };

  const handleAddUser = () => {
    openModal(<CreateUserFormModal isEdit={false} />);
  };
  const options = ["Investor", "Entrepreneur"];

  const selectLists = options.map((el) => (
    <MenuItem value={el}>
      <Typography
        variant="body1"
        sx={{ color: "primary.main", fontWeight: "light" }}>
        {el}
      </Typography>
    </MenuItem>
  ));

  return (
    <Grid container direction="row" spacing={2}>
      <Grid size={{ xs: 12, md: 5, lg: 3 }} sx={columnStyle}>
        <FormControl fullWidth size="small">
          <Select
            value={role}
            onChange={handleChange}
            displayEmpty
            sx={{ borderRadius: 20 }}>
            <MenuItem value="None">
              <Typography
                variant="body1"
                sx={{ color: "text.disabled", fontWeight: "light" }}>
                Investor/Entrepreneur
              </Typography>
            </MenuItem>
            {selectLists}
          </Select>
        </FormControl>
      </Grid>
      <Grid size={{ xs: 12, md: 7, lg: 5 }} sx={columnStyle}>
        <TextField
          variant="outlined"
          fullWidth
          placeholder="Search"
          size="small"
          onChange={(e) => setSearchText(e.target.value)}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchOutlinedIcon />
                </InputAdornment>
              ),
            },
          }}
          sx={{
            "& .MuiInputBase-root": { borderRadius: 20, color: "primary.main" },
          }}></TextField>
      </Grid>
      <Grid size={{ xs: 6, md: 4, lg: 2 }} sx={columnStyle}>
        <Button
          variant="containedGradient"
          fullWidth
          sx={{ fontWeight: "light" }}
          onClick={handleSearch}>
          Search
        </Button>
      </Grid>
      <Grid size={{ xs: 6, md: 4, lg: 2 }} sx={columnStyle}>
        <Button
          variant="containedGradient"
          startIcon={<ControlPointRoundedIcon />}
          onClick={handleAddUser}
          fullWidth
          sx={{ fontWeight: "medium" }}>
          Add User
        </Button>
      </Grid>
    </Grid>
  );
}
