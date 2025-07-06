import { create } from 'zustand'
import { redirect } from 'react-router'

import type { LoginForm } from 'types'
import { mockAuthUser } from '../mock/mockAuthUser'

type UserInfo = {
    email: string
    name: string
}

type AuthState = {
    userInfo: UserInfo
}

type AuthAction = {
    userLogin: (userData: LoginForm) => void
    userLogout: () => void
    loadProfile: () => void
}

export const useAuthStore = create<AuthState & AuthAction>((set) => ({
    userInfo: {
        email: '',
        name: ''
    },
    userLogin: (userData: LoginForm) => {
        const { email, password } = userData

        const user = mockAuthUser.find(el => el.email === email)
        if (!user) throw new Error("User does not exist")

        const passwordCheck = password === user.password
        if (!passwordCheck) throw new Error("Incorrect password")

        const auth = { email: user.email, name: user.name }
        localStorage.setItem("user", JSON.stringify(auth))
    },
    loadProfile: () => {
        const user = localStorage.getItem("user")
        const convertUser = user ? (JSON.parse(user)) : null;
        if (!convertUser)  redirect("/")
        
        const { email, name } = convertUser

        set(() => ({ userInfo: { email, name } }))
    },
    userLogout: () => {
        localStorage.removeItem("user")
        localStorage.removeItem("userLists")
    },
}))
