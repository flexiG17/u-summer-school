import {UserConstEnum} from "../../enums/UserEnum";
import {UserInterface} from "../../interfaces/UserInterface";

export const GetCurrentUser = (): UserInterface => {
    return JSON.parse(localStorage.getItem(UserConstEnum.CURRENT_USER) || '{}')
}