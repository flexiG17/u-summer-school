import {MessageEnum} from "../../enums/MessageEnum";
import {MessagesInterface} from "../../interfaces/MessagesInterface";

export const GetAllMessagesUtil = (): MessagesInterface[] => {
    return JSON.parse(localStorage.getItem(MessageEnum.MESSAGES) || '[{}]')
}