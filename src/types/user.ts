export interface UserData {
    id: string,
    firstname: string,
    surname: string,
    email: string,
    birth: Date,
    titleName: TitleName,
    role: UserRole,
    phone: string
}

export type UserRole = "None" | "Investor" | "Entrepreneur";
export type TitleName = "None" | "Ms." | "Mr.";

export interface UserForm {
    role: UserRole,
    titleName: TitleName,
    firstname: string,
    surname: string,
    birth: Date,
    phone?: string,
    email: string,
    password?: string
    confirmPassword?: string
}
