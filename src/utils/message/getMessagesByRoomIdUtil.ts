import {UserInterface} from "../../interfaces/UserInterface";
import {UserConstEnum} from "../../enums/UserEnum";
import {MessagesInterface} from "../../interfaces/MessagesInterface";
import {MessageEnum} from "../../enums/MessageEnum";
import {GetAllMessagesUtil} from "./getAllMessagesUtil";

export const GetMessagesByRoomIdUtil = (roomId: string) => {
    let messages: MessagesInterface[] = GetAllMessagesUtil()
    const message = messages.find((message) => {
            return message.room_id === roomId
        }
    )
    return message!.data
}