import { createStore } from "redux"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

const persistConfig = {
    key: 'root',
    storage
}

const initialState = {
    items: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'add':
            return { ...state, items: [...action.value]}
        case 'remove':
            return {...state, items: action.value}
        default:
            return state
    }
}

const persistedReducer = persistReducer(persistConfig, reducer)
const store = createStore(persistedReducer)
const persistor = persistStore(store)

export { store, persistor }