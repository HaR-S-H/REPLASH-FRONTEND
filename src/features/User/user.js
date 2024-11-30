import { createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';
const initialState = {
    userInfo:{
        name:"",
        email:"",
        password:"",
        number:""
    },
    // Check if usre is in cookies or not 
    isLogin:Cookies.get('authToken')?true:false

}
const userSlice = createSlice({
    name:"userInfo",
    initialState,
    reducers:{
        setName:(state,action)=>{
            state.userInfo.name=action.payload;
        },
        setEmail:(state,action)=>{
            state.userInfo.email=action.payload;
        },
        setPassword:(state,action)=>{
            state.userInfo.password=action.payload;
        },
        setNumber:(state,action)=>{
            state.userInfo.number=action.payload;
        },
        login:(state,action)=>{
            state.isLogin=true;
        },
        logout:(state,action)=>{
            Cookies.remove('user');
            Cookies.remove('authToken');
            state.isLogin=false;
        }
    }})

export const {setName,setEmail,setPassword,setNumber,login,logout}=userSlice.actions

export default userSlice.reducer