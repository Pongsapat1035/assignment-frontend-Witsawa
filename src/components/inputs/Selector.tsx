import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import Typography from "@mui/material/Typography";

import { Controller, type Control } from "react-hook-form";

type SelectorInputProps = {
  title: string;
  placeholder: string;
  lists: string[];
};

export default function SelectorInput({
  props,
  control,
  errorMsg,
  name,
}: {
  props: SelectorInputProps;
  control: Control<any>;
  errorMsg?: string;
  name: string;
}) {
  const selectStyle = {
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
  };

  const menuLists = props.lists.map((item, index) => (
    <MenuItem value={item} key={index}>
      <Typography variant="body1" color="primary.main" fontWeight="light">
        {item}
      </Typography>
    </MenuItem>
  ));

  return (
    <Controller
      name={name}
      control={control}
      defaultValue="None"
      render={({ field }) => (
        <FormControl fullWidth variant="standard">
          <Stack direction="column" spacing="25px">
            <InputLabel shrink sx={{ fontSize: 20 }}>
              {props.title}
            </InputLabel>
            <Select
              {...field}
              IconComponent={KeyboardArrowDownIcon}
              disableUnderline
              sx={selectStyle}>
              <MenuItem value="None" disabled>
                <Typography variant="body1" color="text.disabled" fontWeight="light">
                  {props.placeholder}
                </Typography>
              </MenuItem>
              {menuLists}
            </Select>
          </Stack>
          <FormHelperText>{errorMsg}</FormHelperText>
        </FormControl>
      )}
    />
  );
}
