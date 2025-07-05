import { useForm } from "react-hook-form";
import InputTag from "./inputs/InputTag";
import SelectorInput from "./inputs/Selector";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import PasswordInputTag from "./inputs/PasswordInput";
import DatePickerTag from "./inputs/DatePickerTag";
import {useModal} from "../pages/dashboard/ModalContext";

export default function CreateUserForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  const { closeModal } = useModal();
  console.log(watch("example"));

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
      <Grid container direction="column" spacing={2}>
        <Grid container direction="row" justifyContent="space-between">
          <Typography variant="h2">Add User</Typography>
          <IconButton onClick={() => closeModal()}>
            <CloseRoundedIcon></CloseRoundedIcon>
          </IconButton>
        </Grid>
        <SelectorInput></SelectorInput>
        <SelectorInput></SelectorInput>
        <Grid container direction="row" spacing={2}>
          <Grid size={6}>
            <InputTag></InputTag>
          </Grid>
          <Grid size={6}>
            <InputTag></InputTag>
          </Grid>
        </Grid>
         <DatePickerTag></DatePickerTag>
        <InputTag></InputTag>
        <InputTag></InputTag>
        <PasswordInputTag></PasswordInputTag>
        <PasswordInputTag></PasswordInputTag>
        <Grid container direction="row" spacing={2} mt={2}>
          <Grid size={6}>
            <Button variant="outlined" fullWidth>
              Cancel
            </Button>
          </Grid>
          <Grid size={6}>
            <Button type="submit" variant="contained" fullWidth>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}
