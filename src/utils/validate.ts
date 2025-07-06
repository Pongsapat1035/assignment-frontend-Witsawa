import type { UseFormRegister } from "react-hook-form";
import type { UserForm } from "types";

export const getCreateFormValidate = (register: UseFormRegister<UserForm>, passwordValue: string, isEdit: boolean) => ({
    role: register("role", {
        validate: (v) => v !== "None" || "Please select a role",
    }),
    titleName: register("titleName", {
        validate: (v) => v !== "None" || "Please select a title name",
    }),
    firstname: register("firstname", { required: "Please enter name" }),
    surname: register("surname", { required: "Please enter surname" }),
    birth: register("birth", {
        validate: (value) =>
            value instanceof Date && !isNaN(value.getTime()) || "Incorrect date",
    }),
    phone: register("phone", {
        pattern: { value: /^\+?\d+$/, message: "Incorrect phone number" },
    }),
    email: register("email", {
        required: "Email is required",
        pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Email is invalid (example@mail.com)",
        },
    }),
    ...(isEdit
        ? {}
        : {
            password: register("password", {
                required: "Password is required",
                minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                },
                pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
                    message: "Password is invalid format",
                },
            }),
            confirmPassword: register("confirmPassword", {
                required: "Confirm password is required",
                validate: (value) =>
                    value === passwordValue || "Password does not match",
            }),
        }),
});

