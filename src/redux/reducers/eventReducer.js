import {
    ALL_EVENT_REQUEST,
    ALL_EVENT_SUCCESS,
    ALL_EVENT_FAIL,

    EVENT_DETAILS_REQUEST,
    EVENT_DETAILS_SUCCESS,
    EVENT_DETAILS_FAIL,

    CREATE_EVENT_REQUEST,
    CREATE_EVENT_SUCCESS,
    CREATE_EVENT_FAIL,
    CREATE_EVENT_RESET,

    UPDATE_EVENT_REQUEST,
    UPDATE_EVENT_SUCCESS,
    UPDATE_EVENT_FAIL,
    UPDATE_EVENT_RESET,

    DELETE_EVENT_REQUEST,
    DELETE_EVENT_SUCCESS,
    DELETE_EVENT_FAIL,
    DELETE_EVENT_RESET,
    ALL_EVENT_REQUEST_ADMIN,
    ALL_EVENT_SUCCESS_ADMIN,
    ALL_EVENT_FAIL_ADMIN,

} from "../constants/eventConstant";


const eventListReducer = (state={}, action)=>{
    switch (action.type) {

        case ALL_EVENT_REQUEST:
            return{
                loading: true,
            }

        case ALL_EVENT_SUCCESS:
            return{
                eventData: action.payload,
                paginationData: action.payload3,
                perPage: action.payload4
            }

        case ALL_EVENT_FAIL:
            return{
                loading: false,
                error: action.payload
            }

        default:
            return state;
    }
}

const eventListReducerAdmin = (state = {}, action) => {
    switch (action.type) {
        case ALL_EVENT_REQUEST_ADMIN:
        return {
            loading: true,
        };

        case ALL_EVENT_SUCCESS_ADMIN:
        return {
            eventDataAdmin: action.payload,
        };

        case ALL_EVENT_FAIL_ADMIN:
        return {
            loading: false,
            error: action.payload,
        };

        default:
        return state;
    }
};


const eventDetailsReducer = (state={ }, action)=>{
    switch(action.type){
        case EVENT_DETAILS_REQUEST:
            return{
                loading: true
            }
        
        case EVENT_DETAILS_SUCCESS:
            return{
                eventData: action.payload
            }    
        
        case EVENT_DETAILS_FAIL:
            return{
                loading: false,
                error: action.payload
            }
        

        default:
            return state
    }
}




const createEventReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_EVENT_REQUEST:
            return {
                loading: true,
            };

        case CREATE_EVENT_SUCCESS:
            return {
                loading: false,
                eventData: action.payload,
                success: true
            };

        case CREATE_EVENT_FAIL:
            return {
                loading: false,
                error: action.payload,
            };

        case CREATE_EVENT_RESET:
            return{
                sucsses: false
            }

        default:
            return state;
    }
};







const eventReducer = (state = {}, action) => {
    switch (action.type) {
        case DELETE_EVENT_REQUEST:
        case UPDATE_EVENT_REQUEST:
            return {
                loading: true,
            };

        case DELETE_EVENT_SUCCESS:
            return {
                loading: false,
                isDeleted: action.payload,
            };

        case UPDATE_EVENT_SUCCESS:
            return {
                loading: false,
                isUpdated: action.payload,
            };

        case DELETE_EVENT_FAIL:
        case UPDATE_EVENT_FAIL:
            return {
                loading: false,
                error: action.payload,
            };

        case UPDATE_EVENT_RESET:
        case DELETE_EVENT_RESET:
            return {
                sucsses: false,
            };

        default:
            return state;
    }
};






export { eventListReducer, eventListReducerAdmin, eventDetailsReducer, createEventReducer, eventReducer};