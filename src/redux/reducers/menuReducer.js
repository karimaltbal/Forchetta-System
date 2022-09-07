import {
    ALL_MENU_REQUEST,
    ALL_MENU_SUCCESS,
    ALL_MENU_FAIL,

    ALL_MENU_REQUEST_ADMIN,
    ALL_MENU_SUCCESS_ADMIN,
    ALL_MENU_FAIL_ADMIN,

    MENU_DETAILS_REQUEST,
    MENU_DETAILS_SUCCESS,
    MENU_DETAILS_FAIL,

    CREATE_MENU_REQUEST,
    CREATE_MENU_SUCCESS,
    CREATE_MENU_FAIL,
    CREATE_MENU_RESET,

    UPDATE_MENU_REQUEST,
    UPDATE_MENU_SUCCESS,
    UPDATE_MENU_FAIL,
    UPDATE_MENU_RESET,

    DELETE_MENU_REQUEST,
    DELETE_MENU_SUCCESS,
    DELETE_MENU_FAIL,
    DELETE_MENU_RESET,

} from "../constants/menuConstants";


const menuListReducer = (state={}, action)=>{
    switch (action.type) {

        case ALL_MENU_REQUEST:
            return{
                loading: true,
            }

        case ALL_MENU_SUCCESS:
            return{
                menuData: action.payload,
                paginationData: action.payload3,
                perPage: action.payload4
            }

        case ALL_MENU_FAIL:
            return{
                loading: false,
                error: action.payload
            }

        default:
            return state;
    }
}

const menuListReducerAdmin = (state = {}, action) => {
    switch (action.type) {
        case ALL_MENU_REQUEST_ADMIN:
        return {
            loading: true,
        };

        case ALL_MENU_SUCCESS_ADMIN:
        return {
            menuDataAdmin: action.payload,
            paginationData: action.payload3,
            perPage: action.payload4
        };

        case ALL_MENU_FAIL_ADMIN:
        return {
            loading: false,
            error: action.payload,
        };

        default:
        return state;
    }
};

const menuDetailsReducer = (state={ }, action)=>{
    switch(action.type){
        case MENU_DETAILS_REQUEST:
            return{
                loading: true
            }
        
        case MENU_DETAILS_SUCCESS:
            return{
                menuData: action.payload
            }    
        
        case MENU_DETAILS_FAIL:
            return{
                loading: false,
                error: action.payload
            }
        

        default:
            return state
    }
}




const createMenuReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_MENU_REQUEST:
            return {
                loading: true,
            };

        case CREATE_MENU_SUCCESS:
            return {
                loading: false,
                menuData: action.payload,
                success: true
            };

        case CREATE_MENU_FAIL:
            return {
                loading: false,
                error: action.payload,
            };

        case CREATE_MENU_RESET:
            return{
                sucsses: false
            }

        default:
            return state;
    }
};







const menuReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_MENU_REQUEST:
        case UPDATE_MENU_REQUEST:
            return {
                loading: true,
            };

        case DELETE_MENU_SUCCESS:
            return {
                loading: false,
                isDeleted: action.payload,
            };

        case UPDATE_MENU_SUCCESS:
            return {
                loading: false,
                isUpdated: action.payload,
            };

        case DELETE_MENU_FAIL:
        case UPDATE_MENU_FAIL:
            return {
                loading: false,
                error: action.payload,
            };

        case UPDATE_MENU_RESET:
        case DELETE_MENU_RESET:
            return {
                sucsses: false,
            };

        default:
            return state;
    }
};






export { menuListReducer, menuListReducerAdmin, menuDetailsReducer, createMenuReducer, menuReducer};