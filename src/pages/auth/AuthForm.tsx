import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InputTag from "@components/inputs/InputTag";
import PasswordInputTag from "@components/inputs/PasswordInput";
import UserIcon from "@assets/icons/user1.png";
import PadLockIcon from "@assets/icons/padlock.png";

import type { LoginForm } from "types";
import type { SubmitHandler } from "react-hook-form";

import { useAuthStore } from "@store/authStore";

const tagData = {
  email: {
    title: "Email",
    placeholder: "Email",
    icon: UserIcon,
  },
  password: {
    title: "Password",
    placeholder: "Password",
    icon: PadLockIcon,
  },
};

const containerStyle = {
  width: 3 / 4,
  p: { xs: 0, md: 5 },
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

export default function AuthForm() {
  const navigate = useNavigate();
  const userLogin = useAuthStore((state) => state.userLogin);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({ mode: "onBlur" });

  const buttonColor =
    "linear-gradient(90deg,rgba(17, 45, 117, 1) 0%, rgba(50, 90, 170, 1) 100%)";

  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    try {
      userLogin(data);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const formValidate = {
    email: {
      ...register("email", {
        required: "Email is required",
        pattern: {
          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          message: "Email is invalid (example@mail.com)",
        },
      }),
    },
    password: {
      ...register("password", {
        required: "Password is required",
        minLength: {
          value: 8,
          message: "Password must be at least 8 character",
        },
        pattern: {
          value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
          message: "Password is invalid format",
        },
      }),
    },
  };

  return (
    <>
      <Grid size={6} container spacing={2} sx={containerStyle}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container direction="column" spacing={3}>
            <Typography variant="h1" fontWeight="medium">
              Login
            </Typography>
            <InputTag
              props={tagData.email}
              validate={formValidate.email}
              errorMsg={errors.email?.message}></InputTag>
            <PasswordInputTag
              props={tagData.password}
              validate={formValidate.password}
              errorMsg={errors.password?.message}></PasswordInputTag>
            <Button
              variant="contained"
              type="submit"
              sx={{
                background: buttonColor,
                width: 4 / 5,
                alignSelf: "center",
              }}>
              Login
            </Button>
          </Grid>
        </form>
      </Grid>
    </>
  );
}
