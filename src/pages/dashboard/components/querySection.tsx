import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { Grid, TextField, Button } from "@mui/material";
import ControlPointRoundedIcon from "@mui/icons-material/ControlPointRounded";
import { useModal } from "../ModalContext";
import InputAdornment from "@mui/material/InputAdornment";
import DeleteModal from "../../../components/modals/ConfirmModal";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export default function QuerySection() {
  const { openModal } = useModal();

  const handleChange = () => {};

  return (
    <Grid container direction="row" spacing={2}>
      <Grid size={3}>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth  size="small">
            <Select
              value={10}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{ borderRadius: 20 }}>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Grid>
      <Grid size={5}>
        <TextField
          variant="outlined"
          fullWidth
          placeholder="Search"
          size="small"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchOutlinedIcon />
                </InputAdornment>
              ),
            },
          }}
          sx={{ "& .MuiInputBase-root": { borderRadius: 20 } }}></TextField>
      </Grid>
      <Grid size={2}>
        <Button variant="contained" fullWidth>
       
          Search
        </Button>
      </Grid>
      <Grid size={2}>
        <Button
          variant="contained"
          startIcon={<ControlPointRoundedIcon />}
          onClick={() => openModal(<DeleteModal />)}
          fullWidth>
          Add User
        </Button>
      </Grid>
    </Grid>
  );
}
