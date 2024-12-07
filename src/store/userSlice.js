import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    id : "",
    name : "",
    email : "",
}

const userSlice  = createSlice({
    name : 'user',
    initialState : initialValue,
    reducers : {
        setUserDetails : (state,action) =>{
            state.id = action.payload?.id
            state.name  = action.payload?.name
            state.email = action.payload?.email
        },
     
    }
})

export const { setUserDetails, logout ,updatedAvatar} = userSlice.actions

export default userSlice.reducer