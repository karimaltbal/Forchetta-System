import { createStore, combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";


import { authReducer, allUsersReducer, userReducer, createUserReducer,} from "../reducers/userReducer";

import { companyListReducer, companyDetailsReducer, createCompanyReducer, companyReducer, companyListReducerAdmin,
} from "../reducers/companyReducers"

import { createBlogReducer, blogListReducerAdmin, blogDetailsReducer, blogListReducer, blogReducer,} from "../reducers/blogReducer" 

import { createEventReducer, eventListReducerAdmin, eventDetailsReducer, eventListReducer, eventReducer,} from "../reducers/eventReducer" 

import { createMenuReducer, menuDetailsReducer, menuListReducer, menuListReducerAdmin, menuReducer,} from "../reducers/menuReducer" 



const reducers = combineReducers({
    userLogin: authReducer,

    userList: allUsersReducer,
    createUser: createUserReducer,
    user: userReducer,

    companyList: companyListReducer,
    companyListAdmin: companyListReducerAdmin,
    companyDetails: companyDetailsReducer,
    createCompany: createCompanyReducer,
    company: companyReducer,


    menuList: menuListReducer,
    menuListAdmin: menuListReducerAdmin,
    menuDetails: menuDetailsReducer,
    createMenu: createMenuReducer,
    menu: menuReducer,


    eventList: eventListReducer,
    eventListAdmin: eventListReducerAdmin,
    eventDetails: eventDetailsReducer,
    createEvent: createEventReducer,
    event: eventReducer,


    blogList: blogListReducer,
    blogListAdmin: blogListReducerAdmin,
    blogDetails: blogDetailsReducer,
    createBlog: createBlogReducer,
    blog: blogReducer,
});




//Get user from localstorage and save it into our store
const userAuthFromStorage = localStorage.getItem('user')? JSON.parse(localStorage.getItem('user')): null;

const initialState = {
    userLogin: { user: userAuthFromStorage },
};

const middleware = [thunk]


const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)


export default store;