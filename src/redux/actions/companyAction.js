import {
    CREATE_COMPANY_REQUEST,
    CREATE_COMPANY_SUCCESS,
    CREATE_COMPANY_FAIL,

    COMPANY_DETAILS_REQUEST,
    COMPANY_DETAILS_SUCCESS,
    COMPANY_DETAILS_FAIL,

    ALL_COMPANY_REQUEST,
    ALL_COMPANY_SUCCESS,
    ALL_COMPANY_FAIL,

    UPDATE_COMPANY_REQUEST,
    UPDATE_COMPANY_SUCCESS,
    UPDATE_COMPANY_FAIL,

    DELETE_COMPANY_REQUEST,
    DELETE_COMPANY_SUCCESS,
    DELETE_COMPANY_FAIL,
    CLEAR_ERRORS,


} from "../constants/companyConstants";
import axios from "axios";


// Create Member
const createCompany = (companyData) => async (dispatch, getState) => {
    try {

        dispatch({ type: CREATE_COMPANY_REQUEST });

        const { user } = getState().userLogin;

        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user.token}`,
                "withCredentials": true
            },
        };
        
        const api_key = "$2y$10$pY8/iyV2LkAA0HNpqpOmc.P2VoapYksgKvK0o0l7omXPaDN1L2trC"
        const link = `http://forchetta-api.forchettauae.com/api/dashboard/company?lang=en&api_key=${api_key}`;
        const link2 = `http://forchetta-api.forchettauae.com/api/sanctum/csrf-cookie?lang=en&api_key=${api_key}`;
        
        await axios.get(link2, config);

        const { data } = await axios.post(link, companyData, config);

        dispatch({ 
            type: CREATE_COMPANY_SUCCESS, 
            payload: data
            
        });

    } catch (error) {
        dispatch({
            type: CREATE_COMPANY_FAIL,
            payload: error.response.data
        });
    }
};








// Get All Orders (admin)
const getAllCompany = (currentPage) => async (dispatch) => {
    try {
        dispatch({ type: ALL_COMPANY_REQUEST });


        const api_key = "$2y$10$pY8/iyV2LkAA0HNpqpOmc.P2VoapYksgKvK0o0l7omXPaDN1L2trC"
        const link = `http://forchetta-api.forchettauae.com/api/company?lang=en&api_key=${api_key}&page=${currentPage}`;
        const { data } = await axios.get(link);

        dispatch({
            type: ALL_COMPANY_SUCCESS,
            payload: data.data,
            payload2: data.data.length,
            payload3: data.meta,
            payload4: data.meta.total
        });

    } catch (error) {
        dispatch({
            type: ALL_COMPANY_FAIL,
            payload: error.response.data.message,
        });
    }
};


/*
// Get All Orders (admin)
const getAllCompanyAdmin = (lang) => async (dispatch, getState) => {
    try {
        dispatch({ type: ALL_COMPANY_REQUEST_ADMIN });

        const { user } = getState().userLogin;

        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user.token}`,
            },
        };
        const api_key = "$2y$10$pY8/iyV2LkAA0HNpqpOmc.P2VoapYksgKvK0o0l7omXPaDN1L2trC"
        const link = `http://forchetta-api.forchettauae.com/api/dashboard/company?lang=en&api_key=${api_key}&page=1`;
        
        const { data } = await axios.get(link, config);
        
        dispatch({ 
            type: ALL_COMPANY_SUCCESS_ADMIN, 
            payload: data.data
        });

    } catch (error) {
        dispatch({
            type: ALL_COMPANY_FAIL_ADMIN,
            payload: error.response.data.message,
        });
    }
};*/


// Get Order Details
const getCompanyDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: COMPANY_DETAILS_REQUEST });

        console.log(getState().userLogin);
        const { user } = getState().userLogin;
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user.token}`,
                "withCredentials": true

            },
        };

        const api_key = "$2y$10$pY8/iyV2LkAA0HNpqpOmc.P2VoapYksgKvK0o0l7omXPaDN1L2trC"
        const link = `http://forchetta-api.forchettauae.com/api/event/${id}?lang=en&api_key=${api_key}`;
        const link2 = `http://forchetta-api.forchettauae.com/api/sanctum/csrf-cookie?lang=en&api_key=${api_key}`;

        await axios.get(link2, config);

        const { data } = await axios.get(link);

        dispatch({ 
            type: COMPANY_DETAILS_SUCCESS, 
            payload: data.member 
        });

    } catch (error) {
        dispatch({
            type: COMPANY_DETAILS_FAIL,
            payload: error.response.data,
        });
    }
};



// Update Member
const updateCompany = (id, dataCompany) => async (dispatch, getState) => {
    try {
        dispatch({ type: UPDATE_COMPANY_REQUEST });

        const { user } = getState().userLogin;

        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user.token}`,
            },
        };

        const api_key = "$2y$10$pY8/iyV2LkAA0HNpqpOmc.P2VoapYksgKvK0o0l7omXPaDN1L2trC"
        const link = `http://forchetta-api.forchettauae.com/api/dashboard/company/${id}?lang=en&api_key=${api_key}`;
        const link2 = `http://forchetta-api.forchettauae.com/api/sanctum/csrf-cookie?lang=en&api_key=${api_key}`;
        await axios.get(link2, config);

        const { data } = await axios.post(link, dataCompany, config);

        dispatch({ 
            type: UPDATE_COMPANY_SUCCESS, 
            payload: data 
        });

    } catch (error) {
        dispatch({
            type: UPDATE_COMPANY_FAIL,
            payload: error.response.data,
        });
    }
};




// Delete Member
const deleteCompany = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: DELETE_COMPANY_REQUEST });

        const { user } = getState().userLogin;

        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user.token}`,
                "withCredentials": true
            },
        };


        const api_key = "$2y$10$pY8/iyV2LkAA0HNpqpOmc.P2VoapYksgKvK0o0l7omXPaDN1L2trC"
        const link = `http://forchetta-api.forchettauae.com/api/dashboard/company/${id}?lang=en&api_key=${api_key}`;
        const link2 = `http://forchetta-api.forchettauae.com/api/sanctum/csrf-cookie?lang=en&api_key=${api_key}`;
        await axios.get(link2, config);

        const { data } = await axios.delete(link, config);

        dispatch({ 
            type: DELETE_COMPANY_SUCCESS, 
            payload: data 
        });

    } catch (error) {
        dispatch({
            type: DELETE_COMPANY_FAIL,
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
    createCompany,
    getAllCompany,
    getCompanyDetails,
    updateCompany,
    deleteCompany,

    clearError
};