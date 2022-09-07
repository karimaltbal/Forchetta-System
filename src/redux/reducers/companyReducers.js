import {
    ALL_COMPANY_REQUEST,
    ALL_COMPANY_SUCCESS,
    ALL_COMPANY_FAIL,

    COMPANY_DETAILS_REQUEST,
    COMPANY_DETAILS_SUCCESS,
    COMPANY_DETAILS_FAIL,

    CREATE_COMPANY_REQUEST,
    CREATE_COMPANY_SUCCESS,
    CREATE_COMPANY_FAIL,
    CREATE_COMPANY_RESET,

    UPDATE_COMPANY_REQUEST,
    UPDATE_COMPANY_SUCCESS,
    UPDATE_COMPANY_FAIL,
    UPDATE_COMPANY_RESET,

    DELETE_COMPANY_REQUEST,
    DELETE_COMPANY_SUCCESS,
    DELETE_COMPANY_FAIL,
    DELETE_COMPANY_RESET,
    ALL_COMPANY_REQUEST_ADMIN,
    ALL_COMPANY_SUCCESS_ADMIN,
    ALL_COMPANY_FAIL_ADMIN,

} from "../constants/companyConstants";


const companyListReducer = (state={}, action)=>{
    switch (action.type) {

        case ALL_COMPANY_REQUEST:
            return{
                loading: true,
            }

        case ALL_COMPANY_SUCCESS:
            return{
                companyData: action.payload,
                numProduct: action.payload2,
                paginationData: action.payload3,
                perPage: action.payload4
            }

        case ALL_COMPANY_FAIL:
            return{
                loading: false,
                error: action.payload
            }

        default:
            return state;
    }
}


const companyListReducerAdmin = (state = {}, action) => {
    switch (action.type) {
        case ALL_COMPANY_REQUEST_ADMIN:
            return {
                loading: true,
            };

        case ALL_COMPANY_SUCCESS_ADMIN:
            return {
                companyDataAdmin: action.payload,
            };

        case ALL_COMPANY_FAIL_ADMIN:
            return {
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
}

const companyDetailsReducer = (state={ news: [] }, action)=>{
    switch(action.type){
        case COMPANY_DETAILS_REQUEST:
            return{
                loading: true
            }
        
        case COMPANY_DETAILS_SUCCESS:
            return{
                companyData: action.payload
            }    
        
        case COMPANY_DETAILS_FAIL:
            return{
                loading: false,
                error: action.payload
            }
        

        default:
            return state
    }
}




const createCompanyReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_COMPANY_REQUEST:
            return {
                loading: true,
            };

        case CREATE_COMPANY_SUCCESS:
            return {
                loading: false,
                companyData: action.payload,
                success: true
            };

        case CREATE_COMPANY_FAIL:
            return {
                loading: false,
                error: action.payload,
            };

        case CREATE_COMPANY_RESET:
            return{
                sucsses: false
            }

        default:
            return state;
    }
};







const companyReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_COMPANY_REQUEST:
        case UPDATE_COMPANY_REQUEST:
            return {
                loading: true,
            };

        case DELETE_COMPANY_SUCCESS:
            return {
                loading: false,
                isDeleted: action.payload,
            };

        case UPDATE_COMPANY_SUCCESS:
            return {
                loading: false,
                isUpdated: action.payload,
            };

        case DELETE_COMPANY_FAIL:
        case UPDATE_COMPANY_FAIL:
            return {
                loading: false,
                error: action.payload,
            };

        case UPDATE_COMPANY_RESET:
        case DELETE_COMPANY_RESET:
            return {
                sucsses: false,
            };

        default:
            return state;
    }
};






export { companyListReducer, companyListReducerAdmin, companyDetailsReducer, createCompanyReducer, companyReducer};