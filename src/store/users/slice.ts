import { createSlice } from "@reduxjs/toolkit";

export interface User{
    name: string;
    email: string;
    github: string
}

export interface UserWithId extends User{
    id:string;
}

const initialState: UserWithId[] = [
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

export const usersSlice = createSlice({
    name:'users',
    initialState: initialState,
    reducers:{}
})

export default usersSlice.reducer