import {
    CREATE_BLOG_REQUEST,
    CREATE_BLOG_SUCCESS,
    CREATE_BLOG_FAIL,

    BLOG_DETAILS_REQUEST,
    BLOG_DETAILS_SUCCESS,
    BLOG_DETAILS_FAIL,

    ALL_BLOG_REQUEST,
    ALL_BLOG_SUCCESS,
    ALL_BLOG_FAIL,

    UPDATE_BLOG_REQUEST,
    UPDATE_BLOG_SUCCESS,
    UPDATE_BLOG_FAIL,

    DELETE_BLOG_REQUEST,
    DELETE_BLOG_SUCCESS,
    DELETE_BLOG_FAIL,

    CLEAR_ERRORS,

} from "../constants/blogConstants";
import axios from "axios";


// Create Member
const createBlog = (blogData) => async (dispatch, getState) => {
    try {

        dispatch({ type: CREATE_BLOG_REQUEST });

        const { user } = getState().userLogin;

        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user.token}`,
                "withCredentials": true
            },
        };
        
        const api_key = "$2y$10$pY8/iyV2LkAA0HNpqpOmc.P2VoapYksgKvK0o0l7omXPaDN1L2trC"
        const link = `http://forchetta-api.forchettauae.com/api/dashboard/blog?lang=en&api_key=${api_key}`;
        const link2 = `http://forchetta-api.forchettauae.com/api/sanctum/csrf-cookie?lang=en&api_key=${api_key}`;
        
        await axios.get(link2, config);

        const { data } = await axios.post(link, blogData, config);

        dispatch({ 
            type: CREATE_BLOG_SUCCESS, 
            payload: data.member
            
        });

    } catch (error) {
        dispatch({
            type: CREATE_BLOG_FAIL,
            payload: error.response.data
        });
    }
};








// Get All Orders (admin)
const getAllBlog = (currentPage) => async (dispatch) => {
    try {
        dispatch({ type: ALL_BLOG_REQUEST });

        const api_key =  "$2y$10$pY8/iyV2LkAA0HNpqpOmc.P2VoapYksgKvK0o0l7omXPaDN1L2trC";
        const link = `http://forchetta-api.forchettauae.com/api/blog?lang=en&api_key=${api_key}&page=${currentPage}`;

        const { data } = await axios.get(link);

        dispatch({
            type: ALL_BLOG_SUCCESS,
            payload: data.data.data,
            payload3: data.data.per_page,
            payload4: data.data.total
        });
    } catch (error) {
        dispatch({
            type: ALL_BLOG_FAIL,
            payload: error.response.data.message,
        });
    }
};




/*
// Get All Orders (admin)
const getAllBlogAdmin = (lang) => async (dispatch, getState) => {
    try {
        dispatch({ type: ALL_BLOG_REQUEST_ADMIN });

        const { user } = getState().userLogin;

        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user.token}`,
            },
        };
        const lng= lang;
        const api_key = "$2y$10$pY8/iyV2LkAA0HNpqpOmc.P2VoapYksgKvK0o0l7omXPaDN1L2trC"
        const link = `http://forchetta-api.forchettauae.com/api/dashboard/blog?lang=en&api_key=${api_key}&page=1`;
        

        const { data } = await axios.get(link, config);

        dispatch({ 
            type: ALL_BLOG_SUCCESS_ADMIN, 
            payload: data.data.data
        });

    } catch (error) {
        dispatch({
            type: ALL_BLOG_FAIL_ADMIN,
            payload: error.response.data.message,
        });
    }
};*/


// Get Order Details
const getBlogDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: BLOG_DETAILS_REQUEST });


        const api_key = "$2y$10$pY8/iyV2LkAA0HNpqpOmc.P2VoapYksgKvK0o0l7omXPaDN1L2trC"
        const link = `http://forchetta-api.forchettauae.com/api/blog/${id}?lang=en&api_key=${api_key}`;

        const { data } = await axios.get(link);

        dispatch({ 
            type: BLOG_DETAILS_SUCCESS, 
            payload: data[1] 
        });

    } catch (error) {
        dispatch({
            type: BLOG_DETAILS_FAIL,
            payload: error.response.data,
        });
    }
};



// Update Member
const updateBlog = (id, dataBlog) => async (dispatch, getState) => {
    try {
        dispatch({ type: UPDATE_BLOG_REQUEST });

        const { user } = getState().userLogin;

        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user.token}`,
            },
        };

        const api_key = "$2y$10$pY8/iyV2LkAA0HNpqpOmc.P2VoapYksgKvK0o0l7omXPaDN1L2trC"
        const link = `http://forchetta-api.forchettauae.com/api/dashboard/blog/${id}?lang=en&api_key=${api_key}`;
        const link2 = `http://forchetta-api.forchettauae.com/api/sanctum/csrf-cookie?lang=en&api_key=${api_key}`;
        await axios.get(link2, config);

        const { data } = await axios.post(link, dataBlog, config);

        dispatch({ 
            type: UPDATE_BLOG_SUCCESS, 
            payload: data 
        });

    } catch (error) {
        dispatch({
            type: UPDATE_BLOG_FAIL,
            payload: error.response.data,
        });
    }
};




// Delete Member
const deleteBlog = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: DELETE_BLOG_REQUEST });

        const { user } = getState().userLogin;

        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user.token}`,
                "withCredentials": true
            },
        };


        const api_key = "$2y$10$pY8/iyV2LkAA0HNpqpOmc.P2VoapYksgKvK0o0l7omXPaDN1L2trC"
        const link = `http://forchetta-api.forchettauae.com/api/dashboard/blog/${id}?lang=en&api_key=${api_key}`;
        const link2 = `http://forchetta-api.forchettauae.com/api/sanctum/csrf-cookie?lang=en&api_key=${api_key}`;
        await axios.get(link2, config);

        const { data } = await axios.delete(link, config);

        dispatch({ 
            type: DELETE_BLOG_SUCCESS, 
            payload: data 
        });

    } catch (error) {
        dispatch({
            type: DELETE_BLOG_FAIL,
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
    createBlog,
    getAllBlog,
    getBlogDetails,
    updateBlog,
    deleteBlog,

    clearError
};