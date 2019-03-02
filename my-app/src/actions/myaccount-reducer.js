import * as constants from '../constant'

export const userDetail = user => {
    const name = user;
    return {
        type: constants.USER_DETAIL,
        payload: {name: name }   
    }
}
