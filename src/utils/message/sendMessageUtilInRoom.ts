import {UserInterface} from "../../interfaces/UserInterface";
import {MessageEnum} from "../../enums/MessageEnum";
import {GetAllMessagesUtil} from "./getAllMessagesUtil";
import {GetMessagesByRoomIdUtil} from "./getMessagesByRoomIdUtil";
import {SingleMessageInterface} from "../../interfaces/SingleMessageInterface";
import {MessagesInterface} from "../../interfaces/MessagesInterface";

export const SendMessageUtilInRoom = (roomId: string, user: UserInterface, text: string) => {
    const messages = GetAllMessagesUtil()
    const indexCurrentRoom = messages
        ? messages.findIndex(message => message.room_id === roomId)
        : -1;

    const newMessage: SingleMessageInterface = {
        text,
        date: new Date(),
        user_id: user.id,
    }
    messages[indexCurrentRoom].data.push(newMessage)

    localStorage.setItem(MessageEnum.MESSAGES, JSON.stringify(messages))
    console.log(messages);
}