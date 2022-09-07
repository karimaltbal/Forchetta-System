import {
    ALL_BLOG_REQUEST,
    ALL_BLOG_SUCCESS,
    ALL_BLOG_FAIL,

    BLOG_DETAILS_REQUEST,
    BLOG_DETAILS_SUCCESS,
    BLOG_DETAILS_FAIL,

    CREATE_BLOG_REQUEST,
    CREATE_BLOG_SUCCESS,
    CREATE_BLOG_FAIL,
    CREATE_BLOG_RESET,

    UPDATE_BLOG_REQUEST,
    UPDATE_BLOG_SUCCESS,
    UPDATE_BLOG_FAIL,
    UPDATE_BLOG_RESET,

    DELETE_BLOG_REQUEST,
    DELETE_BLOG_SUCCESS,
    DELETE_BLOG_FAIL,
    DELETE_BLOG_RESET,
    ALL_BLOG_REQUEST_ADMIN,
    ALL_BLOG_SUCCESS_ADMIN,
    ALL_BLOG_FAIL_ADMIN,

} from "../constants/blogConstants";


const blogListReducer = (state={}, action)=>{
    switch (action.type) {

        case ALL_BLOG_REQUEST:
            return{
                loading: true,
            }

        case ALL_BLOG_SUCCESS:
            return{
                blogData: action.payload,
                paginationData: action.payload3,
                perPage: action.payload4
            }

        case ALL_BLOG_FAIL:
            return{
                loading: false,
                error: action.payload
            }

        default:
            return state;
    }
}

const blogListReducerAdmin = (state = {}, action) => {
    switch (action.type) {
        case ALL_BLOG_REQUEST_ADMIN:
        return {
            loading: true,
        };

        case ALL_BLOG_SUCCESS_ADMIN:
        return {
            blogDataAdmin: action.payload,
        };

        case ALL_BLOG_FAIL_ADMIN:
        return {
            loading: false,
            error: action.payload,
        };

        default:
        return state;
    }
};



const blogDetailsReducer = (state={ }, action)=>{
    switch(action.type){
        case BLOG_DETAILS_REQUEST:
            return{
                loading: true
            }
        
        case BLOG_DETAILS_SUCCESS:
            return{
                blogData: action.payload,
            }    
        
        case BLOG_DETAILS_FAIL:
            return{
                loading: false,
                error: action.payload
            }
        

        default:
            return state
    }
}




const createBlogReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_BLOG_REQUEST:
            return {
                loading: true,
            };

        case CREATE_BLOG_SUCCESS:
            return {
                loading: false,
                blogData: action.payload,
                success: true
            };

        case CREATE_BLOG_FAIL:
            return {
                loading: false,
                error: action.payload,
            };

        case CREATE_BLOG_RESET:
            return{
                sucsses: false
            }

        default:
            return state;
    }
};







const blogReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_BLOG_REQUEST:
        case UPDATE_BLOG_REQUEST:
            return {
                loading: true,
            };

        case DELETE_BLOG_SUCCESS:
            return {
                loading: false,
                isDeleted: action.payload,
            };

        case UPDATE_BLOG_SUCCESS:
            return {
                loading: false,
                isUpdated: action.payload,
            };

        case DELETE_BLOG_FAIL:
        case UPDATE_BLOG_FAIL:
            return {
                loading: false,
                error: action.payload,
            };

        case UPDATE_BLOG_RESET:
        case DELETE_BLOG_RESET:
            return {
                sucsses: false,
            };

        default:
            return state;
    }
};






export { blogListReducer, blogListReducerAdmin, blogDetailsReducer, createBlogReducer, blogReducer};