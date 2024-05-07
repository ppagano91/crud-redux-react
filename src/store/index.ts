import { configureStore, type Middleware} from "@reduxjs/toolkit";
import usersReducer, { rollbackUser } from './users/slice'
import { toast } from "sonner";

const persistanceLocalStorageMiddleware: Middleware = (store) => (next) => (action) =>{
    next(action)
    localStorage.setItem('__redux__state__', JSON.stringify(store.getState()))
}

const syncWithDatabaseMiddleware: Middleware = (store) => (next) => (action) => {
    const { type, payload } = action
    const previosState = store.getState()

    next(action)

    if (type === 'users/addNewUser'){
        fetch(`https://jsonplaceholder.typicode.com/users`, {
            method: 'POST'
        })
        .then( res => {
            if (res.ok){
                toast.success(`Usuario ${payload.name} creado correctamente`)
            }
        })
        .catch(err => {
            console.error(err)
        })
    }
    
    if (type === 'users/deleteUserById'){
        const userIdToRemove = payload
        const userToRemove = previosState.users.find(user => user.id === userIdToRemove)
        fetch(`https://jsonplaceholder.typicode.com/users/${userIdToRemove}`, {
            method: 'DELETE'
        })
        .then( res => {
            if (res.ok){
                toast.success(`Usuario ${userIdToRemove} eliminado correctamente`)
            }

            // throw new Error('Error al eliminar el usuario')
        })
        .catch(err => {
            toast.error(`Error borrando usuario ${userIdToRemove}`)
            if (userToRemove){
                store.dispatch(rollbackUser(userToRemove))
            }
            console.error(err)
        })
    }
}

export const store = configureStore({
    reducer: {
        users: usersReducer,
    },
    middleware: (getDefaultMiddleware) => {

        return getDefaultMiddleware().concat(persistanceLocalStorageMiddleware).concat(syncWithDatabaseMiddleware)
      },
});

export type RootSate = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch