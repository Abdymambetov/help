import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getPhotosAction = createAsyncThunk(
    'getPhotosAction',
    async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos')
        const data = await response.data
        console.log(data)
        return data
    }
)

export const getOnePhotoAction = createAsyncThunk(
    'getOnePhotoAction',
    async (id) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/photos/4${id}`)
        const data = await response.data
        return data
    }
)
const photosLice = createSlice({
    name: 'photosLice',
    initialState: {
        photos: [],
        onPhoto: {}
    }, 
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getPhotosAction.fulfilled, (state, action) => {
            state.photos = action.payload
        })
        builder.addCase(getOnePhotoAction.fulfilled, (state, action) => {
            state.onPhoto = action.payload
        })
    }
})

export default photosLice.reducer