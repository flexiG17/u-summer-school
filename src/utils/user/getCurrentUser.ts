import {UserConstEnum} from "../../enums/UserEnum";

export const GetCurrentUser = () => {
    return JSON.parse(localStorage.getItem(UserConstEnum.CURRENT_USER) || '{}')
}