import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const DEFAULT_STATE = [
    {
        id: '1',
        name: 'midudev',
        email: 'midulive@mail.com',
        github: 'midudev'
    },
    {
        id: '2',
        name: 'ppagano',
        email: 'ppagano@mail.com',
        github: 'ppagano91'
        
    },
    {
        id: '3',
        name: 'johndoe',
        email: 'johndoe@mail.com',
        github: 'johndoe123'
    },
    {
        id: '4',
        name: 'bobsmith',
        email: 'bobsmith@mail.com',
        github: 'bobsmith321'
    },
    {
        id: '5',
        name: 'emilyjones',
        email: 'emilyjones@mail.com',
        github: 'emilyjones456'
    },
    {
        id: '6',
        name: 'davidmiller',
        email: 'davidmiller@mail.com',
        github: 'davidmiller789'
    },
    {
        id: '7',
        name: 'sarahbrown',
        email: 'sarahbrown@mail.com',
        github: 'sarahbrown654'
    },
    {
        id: '8',
        name: 'michaelwilson',
        email: 'michaelwilson@mail.com',
        github: 'michaelwilson987'
    },
    {
        id: '9',
        name: 'laurajackson',
        email: 'laurajackson@mail.com',
        github: 'laurajackson654'
    },
    {
        id: '10',
        name: 'chriscarter',
        email: 'chriscarter@mail.com',
        github: 'chriscarter321'
    }
]

export type UserId = string;

export interface User{
    name: string;
    email: string;
    github: string
}

export interface UserWithId extends User{
    id: UserId;
}

const initialState: UserWithId[] = (() => {
    const persistedState = localStorage.getItem("__redux__state__")
    return persistedState ? JSON.parse(persistedState).users : DEFAULT_STATE
})()

export const usersSlice = createSlice({
    name:'users',
    initialState: initialState,
    reducers:{
        addNewUser: (state, action: PayloadAction<User>) =>{
            const id = crypto.randomUUID()
            return [...state, {id, ...action.payload}]
        },
        deleteUserById: (state, action: PayloadAction<UserId>) => {
            const id = action.payload;
            return state.filter((user) => user.id !== id)
        },
        rollbackUser: (state, action: PayloadAction<UserWithId>) => {
            const isUserAlreadyDefined = state.some(user => user.id === action.payload.id)

            if(!isUserAlreadyDefined){
                return [...state, action.payload]
            }

        }
        
    }
    
})

export default usersSlice.reducer

export const { addNewUser, deleteUserById, rollbackUser } = usersSlice.actions