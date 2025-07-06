import { create } from 'zustand'
import type { UserData, UserForm } from 'types'
import { v4 as uuidv4 } from 'uuid';

import rawUserData from '../mock/mockUsers.json'

type UserStoreState = {
    UserLists: UserData[]
    isLoading: boolean
    searchText: string,
    roleFilter: string,
}

type UserStoreAction = {
    loadDefaultUsers: () => void
    loadUsers: () => void
    createUser: (userData: UserForm) => void
    updateUser: (userId: string, userData: UserForm) => void
    deleteUser: (userId: string) => void
    getUser: (userId: string) => UserData
    updateSearchText: (searchText: string) => void
    updateRole: (role: string) => void
}

export const useUserStore = create<UserStoreState & UserStoreAction>((set, get) => ({
    UserLists: [],
    isLoading: false,
    searchText: '',
    roleFilter: 'None',
    loadDefaultUsers: () => {
        const users = rawUserData.map((user: any): UserData => {
            const { id, email, role } = user
            return {
                id,
                firstname: user.first_name,
                surname: user.last_name,
                email,
                birth: user.birth_date,
                role,
                titleName: user.title_name,
                phone: user.phone_no
            }
        })
        localStorage.setItem("userLists", JSON.stringify(users))
        set({
            UserLists: users,
            isLoading: false
        })
    },
    loadUsers: () => {
        try {
            const user = localStorage.getItem("userLists")
            const convertUser: UserData[] = user ? (JSON.parse(user)) : [];

            if (!convertUser || convertUser.length === 0) {
                get().loadDefaultUsers()
                return
            }

            let queryUser: UserData[] = convertUser
            if (get().searchText !== "") {
                queryUser = convertUser.filter(user => {
                    const fullName = user.firstname + " " + user.surname
                    return fullName.toLowerCase().includes(get().searchText.toLowerCase())
                })
            }

            if (get().roleFilter !== "None") {
                queryUser = queryUser.filter(user => user.role === get().roleFilter)
            }

            set({
                UserLists: queryUser,
                isLoading: false
            })
        } catch (error) {
            console.log(error)
        }
    },
    getUser: (userId: string): UserData => {
        const user = localStorage.getItem("userLists")
        const convertUser = user ? (JSON.parse(user)) as UserData[] : [];

        const existUserIndex = convertUser.findIndex(user => user.id === userId)

        if (existUserIndex === -1) throw new Error("User not found")

        return convertUser[existUserIndex]
    },
    createUser: (userData: UserForm) => {
        const { firstname, surname, email, birth, phone, titleName, role } = userData

        const id = uuidv4();
        const validData: UserData = {
            id,
            firstname,
            surname,
            email,
            birth,
            phone: (phone ?? ""),
            titleName,
            role
        }
        set((state) => ({
            UserLists: [...state.UserLists, validData]
        }))
        localStorage.setItem("userLists", JSON.stringify(get().UserLists))
    },
    updateUser: (userId: string, userData: UserForm) => {
        const index = get().UserLists.findIndex(user => user.id === userId)
        const { firstname, surname, email, birth, phone, titleName, role } = userData

        const validData: UserData = {
            id: userId,
            firstname,
            surname,
            email,
            birth,
            role,
            titleName,
            phone: (phone ?? ""),
        }
        const prevUserLists = get().UserLists
        prevUserLists[index] = validData
        set(() => ({
            UserLists: prevUserLists
        }))

        localStorage.setItem("userLists", JSON.stringify(get().UserLists))
        get().loadUsers()
    },
    deleteUser: (userId: string) => {
        set((state) => ({
            UserLists: state.UserLists.filter(user => user.id !== userId)
        }))
        localStorage.setItem("userLists", JSON.stringify(get().UserLists))
    },
    updateSearchText: (searchText: string) => set(() => ({ searchText: searchText })),
    updateRole: (role: string) => set(() => ({ roleFilter: role })),
}))
