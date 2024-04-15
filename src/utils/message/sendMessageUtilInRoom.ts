import {UserInterface} from "../../interfaces/UserInterface";
import {MessageEnum} from "../../enums/MessageEnum";
import {GetAllMessagesUtil} from "./getAllMessagesUtil";
import {GetMessagesByRoomIdUtil} from "./getMessagesByRoomIdUtil";
import {SingleMessageInterface} from "../../interfaces/SingleMessageInterface";
import {MessagesInterface} from "../../interfaces/MessagesInterface";

export const SendMessageUtilInRoom = (roomId: string, user: UserInterface, text: string) => {
    const messages = GetAllMessagesUtil()
    const roomMessages =
        messages.find((message: MessagesInterface) => message.room_id === roomId)

    console.log(roomMessages);
    const newMessage: SingleMessageInterface = {
        text,
        date: new Date(),
        user_id: user.id,
    }
    roomMessages?.data?.push(newMessage)
    messages.map((message) => {
        if (message.room_id === roomId)
            return {
                ...message,
                data: roomMessages?.data
            }
    })
    console.log(messages);

    //localStorage.setItem(MessageEnum.MESSAGES, JSON.stringify(messages))
}