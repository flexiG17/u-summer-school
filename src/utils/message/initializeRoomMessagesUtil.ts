import {RoomEnum} from "../../enums/RoomEnum";
import {GetAllMessagesUtil} from "./getAllMessagesUtil";
import {MessagesInterface} from "../../interfaces/MessagesInterface";
import {MessageEnum} from "../../enums/MessageEnum";

export const InitializeRoomMessagesUtil = (roomId: string, userId: string)  => {
    const messages: MessagesInterface[] = GetAllMessagesUtil()
    messages.push({
        room_id: roomId,
        data: Array({
            text: 'Приветствую всех в этом чате!',
            user_id: userId,
            date: new Date()
        })
    })
    localStorage.setItem(MessageEnum.MESSAGES, JSON.stringify(messages))
}