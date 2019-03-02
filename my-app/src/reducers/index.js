import {combineReducers} from 'redux';
import {myaccountSettings} from './myaccount-reducers'

const myaccountApp = combineReducers({
    myaccountSettings
})

export default myaccountApp;