import { act } from "react";
import { userData } from "../../models/User";   
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice(
    {
        name:'users',
        initialState:userData,
        reducers:
        {
            getUsers:(state, action)=>
            {
                return state;
            },
            addUser:(state, action)=>
            {
                alert("inside add ")
                const {payload} = action;
                console.log({payload})
                state.push(action.payload)
            },
            editUser :(state, action)=>
            {
                const{id, name, age} = action.payload;
                const existingUser = state.find(userData=>userData.id==id);
                if(existingUser)
                {
                    existingUser.name = name;
                    existingUser.age = age;
                }

            },
            deleteUser : (state, action)=>
            {
                alert("in delete")
                const {id} = action.payload;
                return state.filter(userData=>userData.id!=id);
            }
        }
    }
)

export const {getUsers, addUser,editUser, deleteUser} = userSlice.actions; 
export default userSlice.reducer;