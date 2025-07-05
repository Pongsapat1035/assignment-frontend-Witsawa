import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import * as React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Stack } from "@mui/material";

export default function SelectorInput() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: any) => {
    setAge(event.target.value);
  };

  return (
    <FormControl fullWidth variant="standard">
      <Stack direction="column" spacing="25px">
        <InputLabel shrink sx={{ fontSize: 20 }}>
          Age
        </InputLabel>
        <Select
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
          IconComponent={KeyboardArrowDownIcon}
          displayEmpty
          disableUnderline
          sx={{
            marginTop: 2,
            position: "relative",
            border: 1,
            px: 1,
            py: "6px",
            borderRadius: 2,
            borderColor: "divider",
            "& .MuiSelect-icon": {
              color: "primary.main",
              fontSize: 30,
              right: 12,
            },
          }}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </Stack>
    </FormControl>
  );
}
