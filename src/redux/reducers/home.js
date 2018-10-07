import * as Type from "../actions/types";

const initialState = {}

export default (state = initialState, action) => {
    switch(action.type){
        case Type.GET_EMPLOYEE_LIST :
           return { ...state};
        default :
            return { ...state};
    }
}