import { configureStore, createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:'products',
    initialState:{
        veg:[
            {name:"potato",price:100,image:"potato.png"},
            {name:"carrot",price:70,image:"carrot.png"},
            {name:"tomato",price:200,image:"tomoto.png"},
            {name:"beetroot",price:180,image:"betroot.png"},
            {name:"cabbage",price:200,image:"cabpage.png"},
            {name:"brinjal",price:170,image:"brinjal.jpg"},
            {name:"onion",price:100,image:"onion.jpg"},
            {name:"garlic",price:100,image:"garlic.jpg"},
            {name:"ginger",price:100,image:"ginger.jpg"},
            {name:"bittergourd",price:100,image:"bittergourd.jpg"},
            {name:"chilli",price:100,image:"chilli.jpg"},
            {name:"Mint",price:100,image:"mint.jpg"},
            {name:"Coorindar",price:100,image:"coorindar.png"},
            {name:"ash gourd",price:100,image:"ash.png"},
            {name:"drumstick",price:100,image:"drumsti.png"},
            {name:"cauliflower",price:100,image:"cauliflower.jpg"}
        ],
        nonveg:[
        {name:"Fish",price:100,image:"fish.png"},
        {name:"Chicken",price:70,image:"chicken.png"},
        {name:"Mutton",price:200,image:"mutton.png"},
        {name:"Egg",price:180,image:"egg.png"},
        {name:"Prawns",price:200,image:"prawns.png"}
        ],
        milk:[
        {name:"Jersey",price:20,image:"jersey.png"},
        {name:"CountryDelight",price:50,image:"country.png"},
        {name:"Heritage",price:60,image:"haritage.png"},
        {name:"Sangam",price:80,image:"sangam.png"}
        ]
    },
    reducers:{}
});

const cartSlice=createSlice({
    name:'Cart',
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            const item=state.find(item=>item.name===action.payload.name);
            if(item){
                item.quantity+=1;
            }
            else{
                state.push({...action.payload,quantity:1});
            }
        },
        increment:(state,action)=>{
            let item=state.find(item=>item.name===action.payload.name);
            if(item){
                item.quantity+=1;
            }
        },
        decrement:(state,action)=>{
            let item=state.find(item=>item.name===action.payload.name);
            if(item && item.quantity>1){
                item.quantity-=1;
            }
            else{
                return state.filter(item =>item.name!==action.payload.name);
            }
        },
        remove:(state,action)=>{
            return state.filter(item =>item.name!==action.payload.name);
        },
        clearCart:()=>[]
    }
});
let purchaseDetailsSlice=createSlice({
    name:'purchase',
    initialState:[],
    reducers:{
        purchaseItems:(state,action)=>{
            state.push(action.payload);
        },
    }
});
const authSlice = createSlice({
    name:'auth',
    initialState:{
        isAuthenticated:localStorage.getItem("username")?true:false,
        user:localStorage.getItem("username") || "",
    },
    reducers:{
        login:(state,action)=>{
            state.isAuthenticated=true;
            state.user=action.payload;
            localStorage.setItem("username",action.payload);
        },
        Logout:(state)=>{
            state.isAuthenticated=false;
            state.user=" ";
            localStorage.removeItem("username");
        }
    }
});
const store =configureStore({
    reducer:{
        products:productSlice.reducer,
        cart:cartSlice.reducer,
        purchase: purchaseDetailsSlice.reducer,
        auth:authSlice.reducer
    },  
});
export default store;
export const{addToCart,increment,decrement,remove}=cartSlice.actions;
export const{purchaseItems}=purchaseDetailsSlice.actions;
export const{clearCart}=cartSlice.actions;
export const{login,Logout}=authSlice.actions;
