//import { AccordionActions } from "@material-ui/core";
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

    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAIL,

    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL,

    CLEAR_ERRORS,
    DELETE_USER_RESET,
} from "../constants/userConstants";


const authReducer = (state = { user: {} }, action)=>{
    switch (action.type) {
        //Login
        case LOGIN_REQUSET:
            return{
                loading: true,
            }


        case LOGIN_SUCCSESS:
            return {
                user: action.payload,
            };


        case LOGIN_FAIL:
            return {
                loading: false,
                error: action.payload,
            };

    
        default:
            return state;
    }
}

const createUserReducer = (state = { user: {} }, action)=>{
    switch (action.type) {
        case RIGESTER_REQUSET:
            return{
                loading: true,
            }

        case RIGESTER_SUCCSESS:
            return {
                userData: action.payload,
            };
            

        case RIGESTER_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        

    
        default:
            return state;
    }
}



const userReducer = (state = {}, action) => {
    switch (action.type) {
      case UPDATE_USER_REQUEST:
      case DELETE_USER_REQUEST:
        return {
          loading: true,
        };

      case UPDATE_USER_SUCCESS:
        return {
          loading: false,
          isUpdated: action.payload,
        };

      case DELETE_USER_SUCCESS:
        return {
          loading: false,
          isDeleted: action.payload,
        };

      case UPDATE_USER_FAIL:
      case DELETE_USER_FAIL:
        return {
          loading: false,
          error: action.payload,
        };

      case DELETE_USER_RESET:
        return {
          sucsses: false,
        };

      default:
        return state;
    }
};




const allUsersReducer = (state = { users: [] }, action) => {
    switch (action.type) {
        case ALL_USERS_REQUEST:
        return {
            ...state,
            loading: true,
        };
        case ALL_USERS_SUCCESS:
        return {
            ...state,
            loading: false,
            userData: action.payload,
        };

        case ALL_USERS_FAIL:
        return {
            ...state,
            loading: false,
            error: action.payload,
        };

        case CLEAR_ERRORS:
        return {
            ...state,
            error: null,
        };

        default:
        return state;
    }
};






/*
const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case USER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };

    case USER_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

*/
export { authReducer, createUserReducer, userReducer, allUsersReducer };