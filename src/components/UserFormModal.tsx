import { useForm, type SubmitHandler } from "react-hook-form";

import { useModal } from "../pages/dashboard/ModalContext";
import type { UserData, UserForm } from "types";

import InputTag from "./inputs/InputTag";
import SelectorInput from "./inputs/Selector";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import PasswordInputTag from "./inputs/PasswordInput";
import DatePickerTag from "./inputs/DatePickerTag";
import PadLockIcon from "@assets/icons/padlock.png";

import { getCreateFormValidate } from "../utils/validate";
import { useUserStore } from "@store/userStore";
import { useEffect } from "react";
import dayjs from "dayjs";
import SuccessModal from "./modals/SuccessModal";

const roleSelectorData = {
  title: "Role*",
  placeholder: "Select role",
  lists: ["Investor", "Entrepreneur"],
};

const titleNameSelectorData = {
  title: "Title Name*",
  placeholder: "Select title name",
  lists: ["Ms.", "Mr."],
};

const tagData = {
  firstname: {
    title: "Name*",
    placeholder: "Name",
  },
  surname: {
    title: "Surname*",
    placeholder: "Surname",
  },
  phone: {
    title: "Phone number",
    placeholder: "Phone number",
  },
  email: {
    title: "Email*",
    placeholder: "Email",
  },
  password: {
    title: "Password*",
    placeholder: "password",
    icon: PadLockIcon,
  },
  confirmPassword: {
    title: "Confirm Password*",
    placeholder: "Password",
    icon: PadLockIcon,
  },
};

export default function UserFormModal({
  isEdit,
  userId,
}: {
  isEdit: boolean;
  userId?: string;
}) {
  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors },
  } = useForm<UserForm>({
    mode: "onBlur",
    shouldUnregister: true,
    defaultValues: {
      role: "None",
      titleName: "None",
    },
  });

  const passwordValue = watch("password");
  const { openModal, closeModal } = useModal();
  const { createUser, updateUser, getUser } = useUserStore((state) => state);

  const handleCreateUser = (data: UserForm) => {
    try {
      createUser(data);
      closeModal();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditUser = (data: UserForm) => {
    try {
      updateUser(userId ?? "", data);
      openModal(<SuccessModal mode="edit"></SuccessModal>);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit: SubmitHandler<UserForm> = (data) =>
    isEdit ? handleEditUser(data) : handleCreateUser(data);

  const formValidate = getCreateFormValidate(
    register,
    passwordValue ?? "",
    isEdit
  );

  useEffect(() => {
    if (isEdit && userId) {
      const prevData: UserData = getUser(userId);
      if (prevData) {
        console.log(prevData);
        const resetData: UserData = {
          ...prevData,
          birth: prevData.birth ? dayjs(prevData.birth).toDate() : new Date(),
        };
        reset(resetData);
      }
    }
  }, [isEdit, userId]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
      <Grid container direction="column" spacing={2}>
        <Grid container direction="row" justifyContent="space-between">
          <Typography variant="h2" fontWeight="medium">
            {!isEdit ? "Add" : "Edit"} User
          </Typography>
          <IconButton onClick={() => closeModal()}>
            <CloseRoundedIcon></CloseRoundedIcon>
          </IconButton>
        </Grid>
        <SelectorInput
          name="role"
          props={roleSelectorData}
          control={control}
          errorMsg={errors.role?.message}></SelectorInput>
        <SelectorInput
          name="titleName"
          props={titleNameSelectorData}
          control={control}
          errorMsg={errors.titleName?.message}></SelectorInput>
        <Grid container direction="row" spacing={2}>
          <Grid size={6}>
            <InputTag
              props={tagData.firstname}
              validate={formValidate.firstname}
              errorMsg={errors.firstname?.message}></InputTag>
          </Grid>
          <Grid size={6}>
            <InputTag
              props={tagData.surname}
              validate={formValidate.surname}
              errorMsg={errors.surname?.message}></InputTag>
          </Grid>
        </Grid>
        <DatePickerTag
          control={control}
          errorMsg={errors.birth?.message}></DatePickerTag>
        <InputTag
          props={tagData.phone}
          validate={formValidate.phone}
          errorMsg={errors.phone?.message}></InputTag>
        <InputTag
          props={tagData.email}
          validate={formValidate.email}
          errorMsg={errors.email?.message}></InputTag>
        {!isEdit ? (
          <>
            <PasswordInputTag
              props={tagData.password}
              validate={formValidate.password}
              errorMsg={errors.password?.message}></PasswordInputTag>
            <PasswordInputTag
              props={tagData.confirmPassword}
              validate={formValidate.confirmPassword}
              errorMsg={errors.confirmPassword?.message}></PasswordInputTag>
          </>
        ) : null}

        <Grid container direction="row" spacing={2} mt={2}>
          <Grid size={6}>
            <Button variant="outlined" fullWidth onClick={()=> closeModal()} sx={{ borderColor: 'black', fontWeight: 'light', color: 'black' }}>
              Cancel
            </Button>
          </Grid>
          <Grid size={6}>
            <Button type="submit" variant="containedGradient" fullWidth>
              Save
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}
