import {
    CREATE_EVENT_REQUEST,
    CREATE_EVENT_SUCCESS,
    CREATE_EVENT_FAIL,

    EVENT_DETAILS_REQUEST,
    EVENT_DETAILS_SUCCESS,
    EVENT_DETAILS_FAIL,

    ALL_EVENT_REQUEST,
    ALL_EVENT_SUCCESS,
    ALL_EVENT_FAIL,

    UPDATE_EVENT_REQUEST,
    UPDATE_EVENT_SUCCESS,
    UPDATE_EVENT_FAIL,

    DELETE_EVENT_REQUEST,
    DELETE_EVENT_SUCCESS,
    DELETE_EVENT_FAIL,

    CLEAR_ERRORS,


} from "../constants/eventConstant";
import axios from "axios";


// Create Member
const createEvent = (eventData) => async (dispatch, getState) => {
    try {

        dispatch({ type: CREATE_EVENT_REQUEST });

        const { user } = getState().userLogin;

        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user.token}`,
                "withCredentials": true,

            },
        };

        const api_key = "$2y$10$pY8/iyV2LkAA0HNpqpOmc.P2VoapYksgKvK0o0l7omXPaDN1L2trC"
        const link = `http://forchetta-api.forchettauae.com/api/dashboard/event?lang=en&api_key=${api_key}`;
        const link2 = `http://forchetta-api.forchettauae.com/api/sanctum/csrf-cookie?lang=en&api_key=${api_key}`;

        await axios.get(link2, config);

        console.log(await axios.get(link2, config))
        const { data } = await axios.post(link, eventData, config);

        dispatch({ 
            type: CREATE_EVENT_SUCCESS, 
            payload: data
            
        });

    } catch (error) {
        dispatch({
            type: CREATE_EVENT_FAIL,
            payload: error
        });
    }
};








// Get All Orders (admin)
const getAllEvent = (currentPage) => async (dispatch) => {
    try {
        dispatch({ type: ALL_EVENT_REQUEST });


        const api_key = "$2y$10$pY8/iyV2LkAA0HNpqpOmc.P2VoapYksgKvK0o0l7omXPaDN1L2trC"
        const link = `http://forchetta-api.forchettauae.com/api/event?lang=en&api_key=${api_key}&page=${currentPage}`;
        
        const { data } = await axios.get(link);

        dispatch({ 
            type: ALL_EVENT_SUCCESS, 
            payload: data[1].data,
            payload3: data[1].per_page,
            payload4: data[1].total
        });

    } catch (error) {
        dispatch({
            type: ALL_EVENT_FAIL,
            payload: error.response.data.message,
        });
    }
};


/*

// Get All Orders (admin)
const getAllEventAdmin = (lang) => async (dispatch, getState) => {
    try {
        dispatch({ type: ALL_EVENT_REQUEST_ADMIN });

        const { user } = getState().userLogin;

        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user.token}`,
            },
        };
        const api_key = "$2y$10$pY8/iyV2LkAA0HNpqpOmc.P2VoapYksgKvK0o0l7omXPaDN1L2trC"
        const link = `http://forchetta-api.forchettauae.com/api/dashboard/event?lang=en&api_key=${api_key}&page=1`;
        
        const { data } = await axios.get(link, config);

        dispatch({ 
            type: ALL_EVENT_SUCCESS_ADMIN, 
            payload: data[1].data
        });

    } catch (error) {
        dispatch({
            type: ALL_EVENT_FAIL_ADMIN,
            payload: error.response.data.message,
        });
    }
};
*/

// Get Order Details
const getEventDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: EVENT_DETAILS_REQUEST });

        const api_key = "$2y$10$pY8/iyV2LkAA0HNpqpOmc.P2VoapYksgKvK0o0l7omXPaDN1L2trC"
        const link = `http://forchetta-api.forchettauae.com/api/event/${id}?lang=en&api_key=${api_key}`;

        const { data } = await axios.get(link);

        dispatch({ 
            type: EVENT_DETAILS_SUCCESS, 
            payload: data[1]  
        });

    } catch (error) {
        dispatch({
            type: EVENT_DETAILS_FAIL,
            payload: error.response.data,
        });
    }
};



// Update Member
const updateEvent = (id, dataEvent) => async (dispatch, getState) => {
    try {
        dispatch({ type: UPDATE_EVENT_REQUEST });

        const { user } = getState().userLogin;

        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user.token}`,
            },
        };

        const api_key = "$2y$10$pY8/iyV2LkAA0HNpqpOmc.P2VoapYksgKvK0o0l7omXPaDN1L2trC"
        const link = `http://forchetta-api.forchettauae.com/api/dashboard/event/${id}?lang=en&api_key=${api_key}`;
        const link2 = `http://forchetta-api.forchettauae.com/api/sanctum/csrf-cookie?lang=en&api_key=${api_key}`;
        await axios.get(link2, config);

        const { data } = await axios.post(link, dataEvent, config);

        dispatch({ 
            type: UPDATE_EVENT_SUCCESS, 
            payload: data 
        });

    } catch (error) {
        dispatch({
            type: UPDATE_EVENT_FAIL,
            payload: error.response.data,
        });
    }
};




// Delete Member
const deleteEvent = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: DELETE_EVENT_REQUEST });

        const { user } = getState().userLogin;

        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user.token}`,
                "withCredentials": true

            },
        };

        const api_key = "$2y$10$pY8/iyV2LkAA0HNpqpOmc.P2VoapYksgKvK0o0l7omXPaDN1L2trC"
        const link = `http://forchetta-api.forchettauae.com/api/dashboard/event/${id}?lang=en&api_key=${api_key}`;
        const link2 = `http://forchetta-api.forchettauae.com/api/sanctum/csrf-cookie?lang=en&api_key=${api_key}`;
        await axios.get(link2, config);

        const { data } = await axios.delete(link, config);

        dispatch({ 
            type: DELETE_EVENT_SUCCESS, 
            payload: data 
        });

    } catch (error) {
        dispatch({
            type: DELETE_EVENT_FAIL,
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
    createEvent,
    getAllEvent,
    getEventDetails,
    updateEvent,
    deleteEvent,

    clearError
};