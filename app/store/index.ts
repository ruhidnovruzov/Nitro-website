import { configureStore } from "@reduxjs/toolkit";
import AnnouncementReducer from "./features/newCar.slice"

type Ibrand = {
    brand: string
}

export interface IState {
    announcement: Ibrand[]
}

export const store = configureStore({
    reducer: {
        'announcement': AnnouncementReducer
    }
})