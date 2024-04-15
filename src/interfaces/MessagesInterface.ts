import {SingleMessageInterface} from "./SingleMessageInterface";

export interface MessagesInterface {
    room_id: string,
    data: SingleMessageInterface[]
}