import {
    LOGIN_REQUSET,
    LOGIN_SUCCSESS,
    LOGIN_FAIL,

    RIGESTER_REQUSET,
    RIGESTER_SUCCSESS,
    RIGESTER_FAIL,
    
    ALL_USERS_REQUEST,
    ALL_USERS_SUCCESS,
    ALL_USERS_FAIL,

    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL,

    CLEAR_ERRORS,
} from "../constants/userConstants";
import axios from "axios";




const loginAction = (logindata)=>{
    return async (dispatch)=>{
        try {
            dispatch({ type: LOGIN_REQUSET});

            const api_key = "$2y$10$pY8/iyV2LkAA0HNpqpOmc.P2VoapYksgKvK0o0l7omXPaDN1L2trC"
            const link = `http://forchetta-api.forchettauae.com/api/login?lang=en&api_key=${api_key}`;
            const link2 = `http://forchetta-api.forchettauae.com/api/sanctum/csrf-cookie?lang=en&api_key=${api_key}`;

            const config = { headers: { 
                "Content-Type": "application/json",
                "withCredentials": true
            } };

            await axios.get(link2, config);

            const { data } = await axios.post(link, logindata, config);

            localStorage.setItem("user", JSON.stringify(data));
            
            dispatch({
                type: LOGIN_SUCCSESS,
                payload: data,
            });
            
        } catch (error) {
            dispatch({
                type: LOGIN_FAIL,
                payload: error.response.data
            });
            console.log(error)
        }
        
    }
}



const rigesterAction = (rigesterData)=>{
    return async (dispatch, getState)=>{
        try {
            dispatch({ type: RIGESTER_REQUSET });

        const { user } = getState().userLogin;

        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user.token}`,
                "withCredentials": true
            },
        };

            const api_key = "$2y$10$pY8/iyV2LkAA0HNpqpOmc.P2VoapYksgKvK0o0l7omXPaDN1L2trC"
            const link = `http://forchetta-api.forchettauae.com/api/dashboard/user?lang=en&api_key=${api_key}`;
            const link2 = `http://forchetta-api.forchettauae.com/api/sanctum/csrf-cookie?lang=en&api_key=${api_key}`;

            await axios.get(link2, config);

            const { data } = await axios.post(link, rigesterData, config);

            dispatch({
                type: RIGESTER_SUCCSESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: RIGESTER_FAIL,
                payload: error.response.data
            });
        }
        
    }
}







// get All Users
const getAllUsers = () => async (dispatch, getState) => {
    try {
        dispatch({ type: ALL_USERS_REQUEST });

        const { user } = getState().userLogin;

        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user.token}`,
                "withCredentials": true
            },
        };
        
        const api_key = "$2y$10$pY8/iyV2LkAA0HNpqpOmc.P2VoapYksgKvK0o0l7omXPaDN1L2trC"
        const link = `http://forchetta-api.forchettauae.com/api/dashboard/user?lang=en&api_key=${api_key}&page=1`;
        const link2 = `http://forchetta-api.forchettauae.com/api/sanctum/csrf-cookie?lang=en&api_key=${api_key}`;
        
        await axios.get(link2, config);

        const { data } = await axios.get(link, config);

        dispatch({
            type: ALL_USERS_SUCCESS,
            payload: data.data.data,
        });
    } catch (error) {
        dispatch({ 
            type: ALL_USERS_FAIL, 
            payload: error.response.data.message 
        });
    }
};


/*

// get  User Details
const getUserDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_DETAILS_REQUEST });

        const { user } = getState().userLogin;
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user.token}`,
            },
        };

        const { data } = await axios.get(`/api/v1/admin/user/${id}`, config);

        dispatch({ type: USER_DETAILS_SUCCESS, payload: data.user });
    } catch (error) {
        dispatch({ type: USER_DETAILS_FAIL, payload: error.response.data.message });
    }
};




// Update User
const updateUser = (id, userData) => async (dispatch, getState) => {
    try {
        dispatch({ type: UPDATE_USER_REQUEST });

        const { user } = getState().userLogin;
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user.token}`,
            },
        };

        const { data } = await axios.put(`/api/v1/admin/users/updateuser/${id}`, userData, config);

        localStorage.setItem("user", JSON.stringify(data));

        dispatch({ type: UPDATE_USER_SUCCESS, payload: data.success });
    } catch (error) {
        dispatch({
            type: UPDATE_USER_FAIL,
            payload: error.response.data.message,
        });
    }
};
*/

// Delete User
const deleteUser = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: DELETE_USER_REQUEST });

        const { user } = getState().userLogin;

        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user.token}`,
                "withCredentials": true
            },
        };
        
        const api_key = "$2y$10$pY8/iyV2LkAA0HNpqpOmc.P2VoapYksgKvK0o0l7omXPaDN1L2trC"
        const link = `http://forchetta-api.forchettauae.com/api/dashboard/user/${id}?lang=en&api_key=${api_key}`;
        const link2 = `http://forchetta-api.forchettauae.com/api/sanctum/csrf-cookie?lang=en&api_key=${api_key}`;
        
        await axios.get(link2, config);

        const { data } = await axios.delete(link, config);

        dispatch({ 
            type: DELETE_USER_SUCCESS, 
            payload: data 
        });
    } catch (error) {
        dispatch({
            type: DELETE_USER_FAIL,
            payload: error.response.data.message,
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
    loginAction,
    rigesterAction,


    getAllUsers,
    deleteUser,
    
    clearError,
};