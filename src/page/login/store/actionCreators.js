import * as constants from './constants'

export const logout = () => ({
    type:constants.LOGOUT,
    value:true
})

export const login = (account,password) => ({
    type:constants.CHANGE_LOGIN,
    account,
    password
})