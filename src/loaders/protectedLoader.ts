import { redirect } from "react-router";

export function protectedLoader() {
    const user = localStorage.getItem("user")
    const convertUser = user ? (JSON.parse(user)) : null;
    if(!convertUser) throw redirect('/');
  
    return null;
}