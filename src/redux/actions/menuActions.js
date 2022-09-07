import {
    CREATE_MENU_REQUEST,
    CREATE_MENU_SUCCESS,
    CREATE_MENU_FAIL,

    MENU_DETAILS_REQUEST,
    MENU_DETAILS_SUCCESS,
    MENU_DETAILS_FAIL,

    ALL_MENU_REQUEST,
    ALL_MENU_SUCCESS,
    ALL_MENU_FAIL,

    UPDATE_MENU_REQUEST,
    UPDATE_MENU_SUCCESS,
    UPDATE_MENU_FAIL,

    DELETE_MENU_REQUEST,
    DELETE_MENU_SUCCESS,
    DELETE_MENU_FAIL,
    
    CLEAR_ERRORS,

    ALL_MENU_REQUEST_ADMIN,
    ALL_MENU_SUCCESS_ADMIN,
    ALL_MENU_FAIL_ADMIN,


} from "../constants/menuConstants";
import axios from "axios";


// Create Member
const createMenu = (menuData) => async (dispatch, getState) => {
    try {

        dispatch({ type: CREATE_MENU_REQUEST });

        const { user } = getState().userLogin;

        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user.token}`,
                "withCredentials": true
            },
        };
        

        const api_key = "$2y$10$pY8/iyV2LkAA0HNpqpOmc.P2VoapYksgKvK0o0l7omXPaDN1L2trC"
        const link = `http://forchetta-api.forchettauae.com/api/dashboard/food?lang=en&api_key=${api_key}`;
        const link2 = `http://forchetta-api.forchettauae.com/api/sanctum/csrf-cookie?lang=en&api_key=${api_key}`;
        
        await axios.get(link2, config);

        const { data } = await axios.post(link, menuData, config);

        dispatch({ 
            type: CREATE_MENU_SUCCESS, 
            payload: data
        });

    } catch (error) {
        dispatch({
            type: CREATE_MENU_FAIL,
            payload: error.response.data
        });
    }
};








// Get All Orders (admin)
const getAllMenu = (currentPage) => async (dispatch) => {
    try {
        dispatch({ type: ALL_MENU_REQUEST });

        const api_key = "$2y$10$pY8/iyV2LkAA0HNpqpOmc.P2VoapYksgKvK0o0l7omXPaDN1L2trC"
        const link = `http://forchetta-api.forchettauae.com/api/category?lang=en&page=1&api_key=${api_key}&food=true&page=${currentPage}`;

        const { data } = await axios.get(link);

        dispatch({ 
            type: ALL_MENU_SUCCESS, 
            payload: data[1].data,
            payload3: data[1].per_page,
            payload4: data[1].total
        });

    } catch (error) {
        dispatch({
            type: ALL_MENU_FAIL,
            payload: error.response.data.message,
        });
    }
};



// Get All Orders (admin)
const getAllMenuAdmin = (currentPage) => async (dispatch) => {
    try {
        dispatch({ type: ALL_MENU_REQUEST_ADMIN });

        const api_key = "$2y$10$pY8/iyV2LkAA0HNpqpOmc.P2VoapYksgKvK0o0l7omXPaDN1L2trC"
        const link = `http://forchetta-api.forchettauae.com/api/food?lang=en&api_key=${api_key}&page=${currentPage}`;

        const { data } = await axios.get(link);

        dispatch({ 
            type: ALL_MENU_SUCCESS_ADMIN, 
            payload: data[1].data,
            payload3: data[1].per_page,
            payload4: data[1].total
        });

    } catch (error) {
        dispatch({
            type: ALL_MENU_FAIL_ADMIN,
            payload: error.response.data.message,
        });
    }
};




// Get Order Details
const getMenuDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: MENU_DETAILS_REQUEST });

        const { user } = getState().userLogin;

        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user.token}`,
                "withCredentials": true
            },
        };


        const api_key = "$2y$10$pY8/iyV2LkAA0HNpqpOmc.P2VoapYksgKvK0o0l7omXPaDN1L2trC"
        const link = `http://forchetta-api.forchettauae.com/api/dashboard/food/${id}?lang=en&api_key=${api_key}`;
        const link2 = `http://forchetta-api.forchettauae.com/api/sanctum/csrf-cookie?lang=en&api_key=${api_key}`;

        await axios.get(link2, config);

        const { data } = await axios.get(link, config);

        dispatch({ 
            type: MENU_DETAILS_SUCCESS, 
            payload: data.data 
        });

    } catch (error) {
        dispatch({
            type: MENU_DETAILS_FAIL,
            payload: error.response.data,
        });
    }
};





// Update Member
const updateMenu = (id, dataMenu) => async (dispatch, getState) => {
    try {
        dispatch({ type: UPDATE_MENU_REQUEST });

        const { user } = getState().userLogin;

        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user.token}`,
                "withCredentials": true
            },
        };


        const api_key = "$2y$10$pY8/iyV2LkAA0HNpqpOmc.P2VoapYksgKvK0o0l7omXPaDN1L2trC"
        const link = `http://forchetta-api.forchettauae.com/api/dashboard/food/${id}?lang=en&api_key=${api_key}`;
        const link2 = `http://forchetta-api.forchettauae.com/api/sanctum/csrf-cookie?lang=en&api_key=${api_key}`;
        await axios.get(link2, config);

        const { data } = await axios.post(link, dataMenu, config);

        dispatch({ 
            type: UPDATE_MENU_SUCCESS, 
            payload: data 
        });

    } catch (error) {
        dispatch({
            type: UPDATE_MENU_FAIL,
            payload: error.response.data,
        });
    }
};




// Delete Member
const deleteMenu = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: DELETE_MENU_REQUEST });

        const { user } = getState().userLogin;

        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user.token}`,
                "withCredentials": true
            },
        };



        const api_key = "$2y$10$pY8/iyV2LkAA0HNpqpOmc.P2VoapYksgKvK0o0l7omXPaDN1L2trC"
        const link = `http://forchetta-api.forchettauae.com/api/dashboard/food/${id}?lang=en&api_key=${api_key}`;
        const link2 = `http://forchetta-api.forchettauae.com/api/sanctum/csrf-cookie?lang=en&api_key=${api_key}`;
        await axios.get(link2, config);

        const { data } = await axios.delete(link, config);

        dispatch({ 
            type: DELETE_MENU_SUCCESS, 
            payload: data 
        });

    } catch (error) {
        dispatch({
            type: DELETE_MENU_FAIL,
            payload: error.response.data,
        });
    }
};




const clearError = ()=>{
    return async (dispatch) => {
        dispatch({
            type: CLEAR_ERRORS,
        });
    };
}

export {
    createMenu,
    getAllMenu,
    getAllMenuAdmin,
    getMenuDetails,
    updateMenu,
    deleteMenu,

    clearError
};