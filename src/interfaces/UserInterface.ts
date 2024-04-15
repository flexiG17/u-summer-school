import {RoomInterface} from "./RoomInterface";

export interface UserInterface {
    id?: string,
    name: string,
    room?: RoomInterface,
}