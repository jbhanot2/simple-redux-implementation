import {USER_DETAIL} from '../constant/index';

const intitialState = []
export const  myaccountSettings = ( state = intitialState, action ) => {
    switch(action.type){
        case USER_DETAIL: 
            return  action.payload.name
        default: 
            return [...state]
    }
}
